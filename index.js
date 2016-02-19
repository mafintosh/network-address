var os = require('os');

function pickInterface(interfaces, family) {
    for (var i in interfaces) {
        for (var j = interfaces[i].length-1; j >= 0; j--) {
            var face = interfaces[i][j]
            if (!face.internal && face.family === family) return face.address
        }
    }
    return family == 'IPv4' ? '127.0.0.1' : '::1'
}

function reduceInterfaces(interfaces, iface) {
    return Object.keys(interfaces).reduce((ifaces, _iface) => {
        if (_iface == iface) ifaces[iface] = interfaces[iface] 
        return ifaces
    },{})
}

var ipv4 = function(iface) {
    var interfaces = os.networkInterfaces()
    if (iface) interfaces = reduceInterfaces(interfaces, iface)
    return pickInterface(interfaces, 'IPv4')
}

var ipv6 = function(iface) {
    var interfaces = os.networkInterfaces()
    if (iface) interfaces = reduceInterfaces(interfaces, iface)
    return pickInterface(interfaces, 'IPv6')
}

ipv4.ipv4 = ipv4
ipv4.ipv6 = ipv6

module.exports = ipv4
