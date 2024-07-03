/*! Build: 2022-05-11 */

/**
 *
 * Tealium Collect 1.0.3
 *
 * @license
 * Copyright (c) 2020 Tealium Inc.  All Rights Reserved.
 *
 */
"object"==typeof JSON&&(TEAL.JSON=JSON),TEAL.tag_functions.push(["tealium_collect","1.0.3",function(i,e,t,c){"use strict";var o,d,n,a,m={},g=t.util;if("tealium_collect"===i.getName())if(g.isEmpty(e.tealium_account))i.debug("tealium_account not found in data layer");else if(g.isEmpty(e.tealium_profile))i.debug("tealium_profile not found in data layer");else{if(m.server_domain="tealiumiq.com",m.tag_config_method=i.getVendorConfig("method")||"POST",m.tag_config_server=i.getVendorConfig("server"),m.tag_config_sampling=i.getVendorConfig("sampling")||"100",m.tag_config_region=i.getVendorConfig("region")||"default",m.performance_timing_count=0,1<m.tag_config_server.indexOf("-collect."+m.server_domain)&&(m.server_prefix=m.tag_config_server.split("collect."+m.server_domain)[0],m.tag_config_server="https://"+m.server_prefix+"collect."+m.server_domain+"/event"),""===m.tag_config_server&&("default"===m.tag_config_region?m.tag_config_server="https://collect."+m.server_domain+"/event":m.tag_config_server="https://collect-"+m.tag_config_region+"."+m.server_domain+"/event"),m.server=m.tag_config_server,m.is_in_sample_group=function(){return!0},m.get_performance_timing=function(e){var t,o,n,a={};function r(e,t){var o=0;return t<e&&(o=e-t),o}if(void 0!==c.localStorage&&void 0!==c.JSON&&JSON.parse&&c.performance&&c.performance.timing){for(d in o=c.performance.timing,null!==(n=c.localStorage.getItem("tealium_timing"))&&"{}"!==n&&void 0!==e&&0===m.performance_timing_count&&g.merge(e,g.flatten({timing:JSON.parse(n)}),1),m.performance_timing_count+=1,o)(0===d.indexOf("dom")||0===d.indexOf("load"))&&0===o[d]&&m.performance_timing_count<20&&setTimeout(m.get_performance_timing,1e3);a.domain=c.location.hostname+"",a.pathname=c.location.pathname+"",t=""+c.location.search,a.query_string=t.substring(1),a.timestamp=g.getCurrentTime("ms"),a.dns=r(o.domainLookupEnd,o.domainLookupStart),a.connect=r(o.connectEnd,o.connectStart),a.response=r(o.responseEnd,o.responseStart),a.dom_loading_to_interactive=r(o.domInteractive,o.domLoading),a.dom_interactive_to_complete=r(o.domComplete,o.domInteractive),a.load=r(o.loadEventEnd,o.loadEventStart),a.time_to_first_byte=r(o.responseStart,o.connectEnd),a.front_end=r(o.loadEventStart,o.responseEnd),a.fetch_to_response=r(o.responseStart,o.fetchStart),a.fetch_to_complete=r(o.domComplete,o.fetchStart),a.fetch_to_interactive=r(o.domInteractive,o.fetchStart);try{c.localStorage.setItem("tealium_timing",TEAL.JSON.stringify(a))}catch(e){i.debug(e)}}},!m.is_in_sample_group(e))return!1;for(n in m.get_performance_timing(e),m.data={},m.data=e,g.getKeys(m.data))0===(o=n+"").indexOf("qp.")?m.data[o]=encodeURIComponent(m.data[o]):0===o.indexOf("va.")&&delete m.data[n];a=TEAL.JSON.stringify(m.data),c.TEAL.https?g.request({method:m.tag_config_method,url:m.server,data:a},function(e){i.completed({statusCode:e.statusCode,headers:e.headers})}):c.FormData?g.request({method:"POST",url:m.server.replace("/event","/"+m.data.tealium_account+"/"+m.data.tealium_profile+"/2/i.gif"),data:'{"data":'+a+"}"},function(e){var t="";if(void 0!==e&&3===e.readyState){try{t=e.getResponseHeader("X-Region")||""}catch(e){i.debug(["error",e])}i.completed({headers:{"X-Region":t}})}}):(g.request({method:"GET",url:m.server+"?data="+g.encode(a)}),i.completed())}else i.debug("Tag name of "+i.getName()+" does not match tag: tealium_collect")}]);