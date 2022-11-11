import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '上级类型',
    align:"center",
    dataIndex: 'createBy'
   },
   {
    title: '编号',
    align:"center",
    sorter: true,
    dataIndex: 'clothId'
   },
   {
    title: '类型名称',
    align:"center",
    dataIndex: 'typeName'
   },
   {
    title: '企业名称',
    align:"center",
    dataIndex: 'companyName'
   },
   {
    title: '创建日期',
    align:"center",
    dataIndex: 'createTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "上级类型",
      field: 'createBy',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "编号",
      field: 'clothId',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "类型名称",
      field: 'typeName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "企业名称",
      field: 'companyName',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '上级类型',
    field: 'createBy',
    component: 'Input',
  },
  {
    label: '编号',
    field: 'clothId',
    component: 'Input',
  },
  {
    label: '类型名称',
    field: 'typeName',
    component: 'Input',
  },
  {
    label: '企业名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '创建日期',
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