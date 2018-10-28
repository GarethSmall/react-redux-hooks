//@flow

import { reduxProviderContext } from './ReduxProviderContext';
import ReduxProvider from './ReduxProvider';

const ReactReduxHooks = {
  createReduxContext: reduxProviderContext,
  ReduxProvider,
};

export { reduxProviderContext, ReduxProvider };

export default ReactReduxHooks;