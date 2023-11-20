"use strict"
const os = require('os');
const fs = require('fs');
const data = require('../chunks/preset.json')
const path = require('path');

module.exports =  class Boot{

    constructor(){
        this.systeminfo = {
            'name':os.hostname(),
            'operatingSystem':os.platform(),
            'opVersion':os.release(),
            'userinfo':os.userInfo(),
            'version':os.version()
        }
        this.specifications={
            'memory':os.totalmem(),
            'freeMemory':os.freemem(),
            'processor':os.cpus(),
            'arch':os.arch(),
            'graphics':null,
            'disc':null
        }
        this.readAndwriteJson();
    }

    readAndwriteJson(){
        const p_data = JSON.parse(JSON.stringify(data));
        const sys = p_data.system;
        sys.Name = this.systeminfo.name;
        sys.userinfo = this.systeminfo.userinfo;
        sys.version = this.systeminfo.version;
        sys.operatingSystem = this.systeminfo.operatingSystem;
        sys.opVersion = this.systeminfo.opVersion;
        sys.screen = '';
        sys.specifications = this.specifications;
        console.log(sys);
    }
}