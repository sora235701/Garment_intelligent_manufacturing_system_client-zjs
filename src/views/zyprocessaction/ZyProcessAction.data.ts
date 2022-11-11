import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '内部编号',
    align:"center",
    dataIndex: 'createId'
   },
   {
    title: '工序id',
    align:"center",
    dataIndex: 'processId'
   },
   {
    title: '动作id',
    align:"center",
    dataIndex: 'actionId'
   },
   {
    title: '顺序',
    align:"center",
    dataIndex: 'sortAction'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'createTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "内部编号",
      field: 'createId',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '内部编号',
    field: 'createId',
    component: 'Input',
  },
  {
    label: '工序id',
    field: 'processId',
    component: 'Input',
  },
  {
    label: '动作id',
    field: 'actionId',
    component: 'Input',
  },
  {
    label: '顺序',
    field: 'sortAction',
    component: 'InputNumber',
  },
  {
    label: '创建时间',
    field: 'createTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}