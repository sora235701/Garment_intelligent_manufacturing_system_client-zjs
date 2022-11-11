import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '服装类型id',
    align:"center",
    dataIndex: 'clothsTypeId'
   },
   {
    title: '部位',
    align:"center",
    dataIndex: 'place'
   },
   {
    title: '企业id',
    align:"center",
    dataIndex: 'enterpriseId'
   },
   {
    title: '图片地址',
    align:"center",
    dataIndex: 'pictureUrl'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'createTime'
   },
   {
    title: '更新time',
    align:"center",
    dataIndex: 'upTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '服装类型id',
    field: 'clothsTypeId',
    component: 'Input',
  },
  {
    label: '部位',
    field: 'place',
    component: 'Input',
  },
  {
    label: '企业id',
    field: 'enterpriseId',
    component: 'Input',
  },
  {
    label: '图片地址',
    field: 'pictureUrl',
    component: 'Input',
  },
  {
    label: '创建时间',
    field: 'createTime',
    component: 'DatePicker',
    componentProps: {
       showTime:true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '更新time',
    field: 'upTime',
    component: 'DatePicker',
    componentProps: {
       showTime:true,
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
//子表单数据
//子表表格配置


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}