import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import { updateLikes, postLikes, fetchData } from './modules/getShowsList.js';

fetchData();
updateLikes();
postLikes();
