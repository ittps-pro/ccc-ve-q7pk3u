// enum ServiceSubType {}
// SSTP = 'SSTP',
// IKEv2 = 'IKEv2',
// L2TP = 'L2TP',
// OpenConnect = 'OpenConnect',
// WireGuard = 'WireGuard',
// OpenVPN = 'OpenVPN',
// PPTP = 'PPTP',
// TailScale = 'TailScale',
// SSHPortFwd = 'SSHPortFwd',

enum E {
  WG = 'WireGuard',
  IKEv2 = 'IKEv2',
  SSTP = 'SSTP',
  OC = 'OpenConnect',
}

export interface Service {
  type: E;
  name: string;
  descripion: string;
}

export interface SSTP extends Service {
  type: E.SSTP;
  server: string;
  username: string;
  password: string;
}

//export

export interface IKEv2 extends Service {
  type: E.IKEv2;
  server: string;
  username: string;
  password: string;
  privateKey: string;
  publicKey: string;
}
