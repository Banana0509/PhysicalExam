import Vue from 'vue'
import Router from 'vue-router'
import welcome from '@/components/welcome'
import GeneralData from '@/components/GeneralData'
import TodoList from '@/components/TodoList'
import InternalData from '@/components/InternalData'
import SurgeryData from '@/components/SurgeryData'
import GynaecologyData from '@/components/GynaecologyData'
import FivesensData from '@/components/FivesensData'
import ExamReport from '@/components/ExamReport'
import ChildReport from '@/components/ChildReport'
import ChildInsurData from '@/components/ChildInsurData'
import MainApp from "../MainApp"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MainApp',
      name: 'MainApp',
      component: MainApp,
      children:[
        {
          path: '/welcome',
          name: 'welcome',
          component: welcome
        },
        {
          path:'/GeneralData',
          name:'GeneralData',
          component: GeneralData
        },
        {
          path:'/TodoList',
          name:'TodoList',
          component: TodoList
        },
        {
          path:'/InternalData',
          name:'InternalData',
          component: InternalData
        },
        {
          path:'/SurgeryData',
          name:'SurgeryData',
          component: SurgeryData
        },
        {
          path:'/GynaecologyData',
          name:'GynaecologyData',
          component: GynaecologyData
        },
        {
          path:'/FivesensData',
          name:'FivesensData',
          component: FivesensData
        },
        {
          path:'/ExamReport',
          name:'ExamReport',
          component: ExamReport
        },
        {
          path:'/ChildInsurData',
          name:'ChildInsurData',
          component: ChildInsurData
        },
        {
          path: "/ChildReport",
          name: "ChildReport",
          component: ChildReport
        }
      ]
    },
  ]
})
