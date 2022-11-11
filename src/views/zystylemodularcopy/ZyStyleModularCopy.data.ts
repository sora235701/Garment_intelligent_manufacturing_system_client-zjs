import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '内部编号',
    align:"center",
    sorter: true,
    dataIndex: 'createId'
   },
   {
    title: '款式ID',
    align:"center",
    sorter: true,
    dataIndex: 'styleId'
   },
   {
    title: '工序id',
    align:"center",
    dataIndex: 'processId'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '内部编号',
    field: 'createId',
    component: 'Input',
  },
  {
    label: '款式ID',
    field: 'styleId',
    component: 'Input',
  },
  {
    label: '工序id',
    field: 'processId',
    component: 'Input',
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