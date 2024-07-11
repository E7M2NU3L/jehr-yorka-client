import { proxy } from 'valtio';

type DashState = {
  dashboard: boolean;
  whiteboard: boolean;
  chat: boolean;
  videoCall: boolean;
  tasks: boolean;
  Mailer: boolean;
  settings: boolean;
  help: boolean;
};

const initialState: DashState = {
  dashboard: true,
  whiteboard: false,
  chat: false,
  videoCall: false,
  tasks: false,
  Mailer: false,
  settings: false,
  help: false
};

const DashProxy = proxy(initialState);

export default DashProxy;
