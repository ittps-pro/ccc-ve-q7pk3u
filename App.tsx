// /* eslint-disable no-param-reassign */

import { Select, Button, Form } from 'antd';

// export default function SelectView() {
//   return <Select options={[]} />;
// }

// Function to create SSTP Configuration

// import {
//   ProCard,
//   ProForm,
//   ProFormDependency,
//   ProFormField,
//   ProFormList,
//   ProFormSelect,
//   ProFormSwitch,
//   ProFormText,
// } from '@ant-design/pro-components';
// import { log } from 'console';

// import React, { useState } from 'react';

// const IconMap = {
//   PlusOutlined,
//   HeartOutlined,
//   DeleteOutlined,
//   CopyOutlined,
//   HomeOutlined,
//   SettingFilled,
//   SmileOutlined,
//   SyncOutlined,
// };
// const initialValue = {
//   copyIconProps: {
//     show: true,
//     Icon: 'CopyOutlined',
//     tooltipText: 'Copy',
//   },
//   deleteIconProps: {
//     show: true,
//     Icon: 'DeleteOutlined',
//     tooltipText: 'Delete',
//   },
//   creatorButtonProps: {
//     show: true,
//     creatorButtonText: 'Add',
//     position: 'button',
//     type: 'dashed',
//     icon: 'PlusOutlined',
//   },
// };

// let actions = {
//   create: {
//     title: 'Create',
//     action: CreateAction([1, 2, 3]),
//     icon: PlusOutlined,
//   },
// };
// const CreateAction = async (c: any[]) => {
//   log(c);
//   log('CreateAction');
// };
// // CopyOutlined
// const Demo = () => {
//   const [stateValue, setStateValue] = useState({});
//   const [json, setJson] = useState(() => JSON.stringify(initialValue));
//   return (
//     <>
//       <ProCard bordered split="vertical" headerBordered>
//         <ProCard colSpan="calc(100% - 400px)">L</ProCard>

//         <ProCard colSpan="calc(100% - 400px)">
//           <ProForm>
//             <ProFormList
//               name="users"
//               label="用户信息"
//               initialValue={[
//                 {
//                   name: '1111',
//                 },
//               ]}
//               creatorButtonProps={{
//                 position: 'bottom',
//               }}
//               {...stateValue}
//             >
//               <ProForm.Group key="group" size={8}>
//                 <ProFormText name="name" label="姓名" />
//                 <ProFormText name="nickName" label="姓名" />
//               </ProForm.Group>
//             </ProFormList>
//           </ProForm>
//         </ProCard>

//         <ProCard colSpan="400px" title="配置菜单">
//           <ProForm
//             submitter={false}
//             initialValues={initialValue}
//             onValuesChange={(_, values) => {
//               if (values?.creatorButtonProps?.show === false) {
//                 values.creatorButtonProps = false;
//               }

//               if (values?.copyIconProps?.show === false) {
//                 values.copyIconProps = false;
//               }
//               if (values?.deleteIconProps?.show === false) {
//                 values.deleteIconProps = false;
//               }

//               delete values.creatorButtonProps.show;
//               delete values.deleteIconProps.show;
//               delete values.creatorButtonProps.show;

//               setJson(JSON.stringify(values));

//               if (values?.copyIconProps?.Icon) {
//                 values.copyIconProps.Icon =
//                   IconMap[values?.copyIconProps?.Icon as 'PlusOutlined'];
//               }

//               if (values?.deleteIconProps?.Icon) {
//                 values.deleteIconProps.Icon =
//                   IconMap[values?.deleteIconProps?.Icon as 'PlusOutlined'];
//               }
//               if (values?.creatorButtonProps?.icon) {
//                 const Icon =
//                   IconMap[values?.creatorButtonProps?.icon as 'PlusOutlined'];
//                 values.creatorButtonProps.icon = <Icon />;
//               }
//               setStateValue(values);
//             }}
//           >
//             <ProForm.Group
//               title="新建按钮配置"
//               extra={
//                 <ProFormSwitch
//                   fieldProps={{
//                     size: 'small',
//                   }}
//                   noStyle
//                   name={['creatorButtonProps', 'show']}
//                 />
//               }
//             >
//               <ProFormDependency name={['creatorButtonProps']}>
//                 {({ creatorButtonProps }) => {
//                   if (!creatorButtonProps.show) {
//                     return null;
//                   }
//                   return (
//                     <ProForm.Group size={8}>
//                       <ProFormText
//                         width="sm"
//                         name={['creatorButtonProps', 'creatorButtonText']}
//                         label="按钮文字"
//                       />
//                       <ProFormSelect
//                         width="xs"
//                         name={['creatorButtonProps', 'icon']}
//                         label="图标"
//                         request={async () => {
//                           return Object.keys(IconMap).map((value) => {
//                             const Icon = IconMap[value as 'PlusOutlined'];
//                             return {
//                               label: <Icon />,
//                               value,
//                             };
//                           });
//                         }}
//                       />
//                       <ProFormSelect
//                         width="xs"
//                         name={['creatorButtonProps', 'position']}
//                         label="按钮位置"
//                         request={async () => {
//                           return ['bottom', 'top'].map((value) => {
//                             return {
//                               label: value,
//                               value,
//                             };
//                           });
//                         }}
//                       />
//                       <ProFormSelect
//                         width="xs"
//                         name={['creatorButtonProps', 'type']}
//                         label="按钮类型"
//                         request={async () => {
//                           return [
//                             'default',
//                             'primary',
//                             'ghost',
//                             'dashed',
//                             'link',
//                             'text',
//                           ].map((value) => {
//                             return {
//                               label: value,
//                               value,
//                             };
//                           });
//                         }}
//                       />
//                     </ProForm.Group>
//                   );
//                 }}
//               </ProFormDependency>
//             </ProForm.Group>

//             <ProForm.Group
//               title="复制按钮配置"
//               extra={
//                 <ProFormSwitch
//                   fieldProps={{
//                     size: 'small',
//                   }}
//                   noStyle
//                   name={['copyIconProps', 'show']}
//                 />
//               }
//             >
//               <ProFormDependency name={['copyIconProps']}>
//                 {({ copyIconProps }) => {
//                   if (!copyIconProps.show) {
//                     return null;
//                   }
//                   return (
//                     <ProForm.Group size={8}>
//                       <ProFormText
//                         width="sm"
//                         name={['copyIconProps', 'tooltipText']}
//                         label=" tooltip 提示文字"
//                       />
//                       <ProFormSelect
//                         width="xs"
//                         name={['copyIconProps', 'Icon']}
//                         label="图标"
//                         request={async () => {
//                           return Object.keys(IconMap).map((value) => {
//                             const Icon = IconMap[value as 'PlusOutlined'];
//                             return {
//                               label: <Icon />,
//                               value,
//                             };
//                           });
//                         }}
//                       />
//                     </ProForm.Group>
//                   );
//                 }}
//               </ProFormDependency>
//             </ProForm.Group>

//             <ProForm.Group
//               title="删除按钮配置"
//               extra={
//                 <ProFormSwitch
//                   fieldProps={{
//                     size: 'small',
//                   }}
//                   noStyle
//                   name={['deleteIconProps', 'show']}
//                 />
//               }
//             >
//               <ProFormDependency name={['deleteIconProps']}>
//                 {({ deleteIconProps }) => {
//                   if (!deleteIconProps.show) {
//                     return null;
//                   }
//                   return (
//                     <ProForm.Group size={8}>
//                       <ProFormText
//                         width="sm"
//                         name={['deleteIconProps', 'tooltipText']}
//                         label=" tooltip 提示文字"
//                       />
//                       <ProFormSelect
//                         width="xs"
//                         name={['deleteIconProps', 'Icon']}
//                         label="图标"
//                         request={async () => {
//                           return Object.keys(IconMap).map((value) => {
//                             const Icon = IconMap[value as 'PlusOutlined'];
//                             return {
//                               label: <Icon />,
//                               value,
//                             };
//                           });
//                         }}
//                       />
//                     </ProForm.Group>
//                   );
//                 }}
//               </ProFormDependency>
//             </ProForm.Group>
//             <ProFormField
//               ignoreFormItem
//               valueType="jsonCode"
//               text={json}
//               mode="read"
//             />
//           </ProForm>
//         </ProCard>
//       </ProCard>
//     </>
//   );
// };

// export default Demo;

let Componenets = () => {
  // Select,
  // SelectContent,
  // SelectGroup,
  // SelectItem,
  // SelectLabel,
  // SelectTrigger,
  // SelectValue,
};
// } from '@/components/ui/select';

/*
export function SelectScrollable() {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>South America</SelectLabel>
          <SelectItem value="art">Argentina Time (ART)</SelectItem>
          <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
          <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
          <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
*/
