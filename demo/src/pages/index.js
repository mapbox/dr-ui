import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { createRedirect } from '@mapbox/dr-ui/helpers/create-redirect';
import constants from '../constants';

export default createRedirect(prefixUrl(`${constants.BASEURL}overview/`));
