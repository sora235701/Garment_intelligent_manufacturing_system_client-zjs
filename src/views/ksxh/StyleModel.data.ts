import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '款式id',
    align:"center",
    sorter: true,
    dataIndex: 'styleId'
   },
   {
    title: '是否默认尺码',
    align:"center",
    dataIndex: 'isdefault'
   },
   {
    title: '型号编码',
    align:"center",
    dataIndex: 'modelNumber'
   },
   {
    title: '码数',
    align:"center",
    dataIndex: 'size'
   },
   {
    title: '型',
    align:"center",
    dataIndex: 'anumbers'
   },
   {
    title: '号',
    align:"center",
    dataIndex: 'bnumbers'
   },
   {
    title: '领大',
    align:"center",
    dataIndex: 'collarLarge'
   },
   {
    title: '胸围',
    align:"center",
    dataIndex: 'bust'
   },
   {
    title: '袖长',
    align:"center",
    dataIndex: 'sleeveLength'
   },
   {
    title: '连肩袖长',
    align:"center",
    dataIndex: 'shslLength'
   },
   {
    title: '总肩宽',
    align:"center",
    dataIndex: 'tsWidth'
   },
   {
    title: '袖口',
    align:"center",
    dataIndex: 'cuff'
   },
   {
    title: '腰围',
    align:"center",
    dataIndex: 'waistline'
   },
   {
    title: '下摆',
    align:"center",
    dataIndex: 'hem'
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
      label: "款式id",
      field: 'styleId',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "是否默认尺码",
      field: 'isdefault',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "型号编码",
      field: 'modelNumber',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '款式id',
    field: 'styleId',
    component: 'Input',
  },
  {
    label: '是否默认尺码',
    field: 'isdefault',
    component: 'InputNumber',
  },
  {
    label: '型号编码',
    field: 'modelNumber',
    component: 'InputNumber',
  },
  {
    label: '码数',
    field: 'size',
    component: 'InputNumber',
  },
  {
    label: '型',
    field: 'anumbers',
    component: 'Input',
  },
  {
    label: '号',
    field: 'bnumbers',
    component: 'Input',
  },
  {
    label: '领大',
    field: 'collarLarge',
    component: 'InputNumber',
  },
  {
    label: '胸围',
    field: 'bust',
    component: 'InputNumber',
  },
  {
    label: '袖长',
    field: 'sleeveLength',
    component: 'InputNumber',
  },
  {
    label: '连肩袖长',
    field: 'shslLength',
    component: 'InputNumber',
  },
  {
    label: '总肩宽',
    field: 'tsWidth',
    component: 'InputNumber',
  },
  {
    label: '袖口',
    field: 'cuff',
    component: 'InputNumber',
  },
  {
    label: '腰围',
    field: 'waistline',
    component: 'InputNumber',
  },
  {
    label: '下摆',
    field: 'hem',
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