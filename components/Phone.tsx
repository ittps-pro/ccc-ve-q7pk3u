

// import {
//   CopyOutlined,
//   DeleteOutlined,
//   HeartOutlined,
//   HomeOutlined,
//   PlusOutlined,
//   SettingFilled,
//   SmileOutlined,
//   SyncOutlined,
// } from '@ant-design/icons';
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


function formatPhoneNumber(phoneNumberString) {


  let country = 'ru'
  

  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '');
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
  }
  return null;
}