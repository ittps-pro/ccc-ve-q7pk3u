import interface { SSTP, IKEv2 } from './interfaces';

const createSSTPConfig = (service: SSTP): string => {
  return `
[Interface]
ClientCert = client.crt
ClientKey = client.key

[SSTP]
Server = ${service.server}
Username = ${service.username}
Password = ${service.password}
`;
};

// Function to create IKEv2 Configuration
const createIKEv2Config = (service: IKEv2): string => {
  return `
conn ikev2vpn
  keyexchange=ikev2
  ikelifetime=24h
  lifetime=24h
  rekeymargin=3m
  keyingtries=1
  authby=secret
  leftsourceip=%config
  leftauth=eap-mschapv2
  eap_identity=${service.username}
  right=${service.server}
  rightsubnet=0.0.0.0/0
  rightauth=pubkey
  rightid=${service.server}
  auto=start

  leftcert=${service.publicKey}
  leftsendcert=always
  authby=secret
  secret=${service.password}
`;
};

// // Function to create L2TP Configuration
// const createL2TPConfig = (service: L2TPService): string => {
//   return `
// name = ${service.username}
// remote = ${service.server}
// l2tp
// require-mschap-v2
// `;
// };

// // Function to create OpenConnect Configuration
// const createOpenConnectConfig = (service: OpenConnectService): string => {
//   return `
// [Connection]
// Host = ${service.server}
// Username = ${service.username}
// Password = ${service.password}
// `;
// };

// Function to create WireGuard Configuration
const W = (service: WireGuardService): string => {
  return `
[Interface]
PrivateKey = ${service.privateKey}
Address = ${service.ip}/24
DNS = 1.1.1.1

[Peer]
PublicKey = ${service.publicKey}
Endpoint = ${service.serverA}
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
`;
};




// View = (service) => {

// }

// // Function to create OpenVPN Configuration
// const createOpenVPNConfig = (service: OpenVPNService): string => {
//   return service.config;
// };

// // Function to create PPTP Configuration
// const createPPTPConfig = (service: PPTPService): string => {
//   return `
// [pptp]
// remote = ${service.server}
// user = ${service.username}
// password = ${service.password}
// `;
// };

// // Function to create TailScale Configuration
// const createTailScaleConfig = (service: TailScaleService): string => {
//   return service.config;
// };

// // Function to create SSH-PortFwd Configuration
// const createSSHPortFwdConfig = (service: SSHPortFwdService): string => {
//   return `
// Host ${service.server}
//   HostName ${service.server}
//   User ${service.username}
//   IdentityFile ${service.privateKey}
//   LocalForward ${service.localPort} ${service.server}:${service.remotePort}
// `;
// };
