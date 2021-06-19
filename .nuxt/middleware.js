const middleware = {}

middleware['checkAccessExpiry'] = require('../middleware/checkAccessExpiry.js')
middleware['checkAccessExpiry'] = middleware['checkAccessExpiry'].default || middleware['checkAccessExpiry']

middleware['customAuth'] = require('../middleware/customAuth.js')
middleware['customAuth'] = middleware['customAuth'].default || middleware['customAuth']

middleware['hideMenuOnLoad'] = require('../middleware/hideMenuOnLoad.js')
middleware['hideMenuOnLoad'] = middleware['hideMenuOnLoad'].default || middleware['hideMenuOnLoad']

middleware['refreshOnLoad'] = require('../middleware/refreshOnLoad.js')
middleware['refreshOnLoad'] = middleware['refreshOnLoad'].default || middleware['refreshOnLoad']

export default middleware
