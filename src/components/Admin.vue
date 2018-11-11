<template>
  <div class="infoDiv">
    <Row class="margin-inside">
      <Col span="6">
      帐号：
      <Input class="button-width" v-model="userInfo.empId"/>
      </Col>
      <Col span="6">
      姓名：
      <Input class="button-width" v-model="userInfo.name"/>
      </Col>
      <Col span="6">
      性别：
      <Input class="button-width" v-model="userInfo.sex"/>
      </Col>
      <Col span="6">
      当前日期:
      <DatePicker type="date" placeholder="Select date" class="button-width" v-model="userInfo.curDate"></DatePicker>
      </Col>
    </Row>
    <Row class="margin-inside">
      <Col span="6">
      <Button type="success" class="button-width">查 询</Button>
      </Col>
      <Col span="6">
      <Button type="success" class="button-width">添 加</Button>
      </Col>
      <Col span="6">
      <Button type="warning" class="button-width">冻 结</Button>
      </Col>
      <Col span="6">
      <Button type="error" class="button-width">删 除</Button>
      </Col>
    </Row>

    <Table border :columns="columns" :data="tableData" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="dataCount" :current="pageCurrent" :page-size="pageSize"
              :page-size-opts="page_size_Opts" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Admin",
    data() {
      return {
        tableData: this.mockTableData(),
        //分页
        pageSize: 10,//每页显示多少条
        page_size_Opts: [10, 20, 30],
        dataCount: 100,//数据总条数  页数 = dataCount/pageSize
        pageCurrent: 1,//当前页
        userInfo: {
          userId: this.GLOBAL.userId,
          name: "",
          sex: "",
          diagnosis: "",
          empId: this.GLOBAL.employeeId,
          curDate: "",
          Date: ""
        },
        columns: [
          {
            title: '帐号',
            key: 'account',
          },
          {
            title: '姓名',
            key: 'name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.name)
              ]);
            }
          },
          {
            title: '性别',
            key: 'sex',
            width: 80,
          },
          {
            title: '角色',
            key: 'role'
          },
          {
            title: '部门',
            key: 'department'
          },
          {
            title: '创建时间',
            key: 'create_time',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].create_time));
            }
          },
          {
            title: '邮箱',
            key: 'email'
          },
          {
            title: '状态',
            key: 'status',
            render: (h, params) => {
              const row = params.row;
              const color = row.status === '1' ? 'primary' : row.status === 2 ? 'success' : 'error';
              const text = row.status === '1' ? '启用' : row.status === 2 ? '正常' : '停用';
              return h('Tag', {
                props: {
                  type: 'dot',
                  color: color
                }
              }, text);
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
      }
    },
    methods: {
      show(index) {
        this.$Modal.info({
          title: '用户信息',
          content: `帐号：${this.tableData[index].account}<br>姓名：${this.tableData[index].name}<br>邮箱：${this.tableData[index].email}`
        })
      },
      remove(index) {
        this.tableData.splice(index, 1);
      },
      mockTableData() {
        let data = [];
        for (let i = 0; i < 10; i++) {
          let index = Math.floor(Math.random() * 100 + 1);
          data.push({
            account: 'admin' + index,
            name: '测试人员' + index,
            sex: '男',
            role: '超级管理员',
            department: '市场部',
            create_time: new Date(),
            email: 'test@163.com',
            status: Math.floor(Math.random() * 3 + 1),
          })
        }
        return data;
      },
      formatDate(date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      changePage(page) {
        // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
        console.log("page:" + page);
        this.tableData = this.mockTableData();
      }
    }
  }
</script>

<style scoped>
  .infoDiv {
    background: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    margin: 20px 10px;
  }

  .margin-inside {
    margin: 20px 20px;
  }

  .button-width {
    width: 70%;
  }
</style>
