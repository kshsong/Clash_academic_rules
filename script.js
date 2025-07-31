// Define main function (script entry)
function main(config) {
  // 读取现有的规则
  let oldRules = config.rules;

  // 定义新的规则，针对学术网站进行DIRECT配置
  let newRules = [
    "DOMAIN-SUFFIX,mdpi.com,DIRECT",
    // ACS (American Chemical Society)
    // 涵盖 pubs.acs.org 等
    "DOMAIN-SUFFIX,acs.org,DIRECT",
    // AIP (American Institute of Physics)
    // 涵盖 pubs.aip.org, publishing.aip.org 等
    "DOMAIN-SUFFIX,aip.org,DIRECT",
    // APS (American Physical Society)
    // 涵盖 journals.aps.org 等
    "DOMAIN-SUFFIX,aps.org,DIRECT",
    // Cambridge University Press (CUP)
    // 涵盖 cambridge.org/core 等
    "DOMAIN-SUFFIX,cambridge.org,DIRECT",
    // Clarivate (Web of Science, EndNote等)
    "DOMAIN-KEYWORD,clarivate,DIRECT", // 公司主域
    "DOMAIN-KEYWORD,webofscience,DIRECT", // Web of Science 平台
    "DOMAIN-KEYWORD,webofknowledge,DIRECT", // 旧域名/可能相关
    "DOMAIN-SUFFIX,webofscience.com,DIRECT",
    "DOMAIN-SUFFIX,clarivate.com,DIRECT",
    "DOMAIN-KEYWORD,endnote,DIRECT", // EndNote (文献管理)
    "DOMAIN-SUFFIX,endnote.com,DIRECT",
    // Elsevier (ScienceDirect, Scopus, Mendeley, ClinicalKey, etc.)
    "DOMAIN-KEYWORD,elsevier,DIRECT", // 公司主域
    "DOMAIN-SUFFIX,elsevier.com,DIRECT",
    "DOMAIN-KEYWORD,sciencedirect,DIRECT", // ScienceDirect 平台
    "DOMAIN-SUFFIX,sciencedirect.com,DIRECT",
    "DOMAIN-KEYWORD,scopus,DIRECT", // Scopus 平台
    "DOMAIN-SUFFIX,scopus.com,DIRECT",
    "DOMAIN-KEYWORD,mendeley,DIRECT", // Mendeley 平台
    "DOMAIN-SUFFIX,mendeley.com,DIRECT",
    "DOMAIN-KEYWORD,clinicalkey,DIRECT", // ClinicalKey 平台
    "DOMAIN-SUFFIX,clinicalkey.com,DIRECT",
    "DOMAIN-KEYWORD,reaxys,DIRECT", // Reaxys 平台
    "DOMAIN-SUFFIX,reaxys.com,DIRECT",
    "DOMAIN-KEYWORD,engineeringvillage,DIRECT", // Engineering Village 平台
    "DOMAIN-SUFFIX,engineeringvillage.com,DIRECT",
    "DOMAIN-KEYWORD,cell,DIRECT", // Cell Press (Elsevier旗下)
    "DOMAIN-SUFFIX,cell.com,DIRECT",
    "DOMAIN-KEYWORD,thelancet,DIRECT", // The Lancet (Elsevier旗下)
    "DOMAIN-SUFFIX,thelancet.com,DIRECT",
    "DOMAIN-KEYWORD,ssrn,DIRECT", // SSRN (Elsevier旗下)
    "DOMAIN-SUFFIX,ssrn.com,DIRECT",
    // IEEE (Institute of Electrical and Electronics Engineers)
    "DOMAIN-KEYWORD,ieee,DIRECT", // 涵盖 ieeexplore.ieee.org 等
    "DOMAIN-SUFFIX,ieee.org,DIRECT",
    "DOMAIN-KEYWORD,ieeexplore,DIRECT",
    // JSTOR (Journal Storage)
    "DOMAIN-KEYWORD,jstor,DIRECT",
    "DOMAIN-SUFFIX,jstor.org,DIRECT",
    // Nature Portfolio (属于 Springer Nature)
    "DOMAIN-KEYWORD,nature,DIRECT", // Nature 主站
    "DOMAIN-SUFFIX,nature.com,DIRECT",
    // Oxford University Press (OUP)
    "DOMAIN-KEYWORD,oup,DIRECT", // 涵盖 academic.oup.com 等
    "DOMAIN-SUFFIX,oup.com,DIRECT",
    "DOMAIN-KEYWORD,oxfordacademic,DIRECT", // academic.oup.com 的一部分
    // PubMed (由 NCBI/NLM/NIH 维护)
    "DOMAIN-KEYWORD,pubmed,DIRECT",
    "DOMAIN-SUFFIX,ncbi.nlm.nih.gov,DIRECT", // NCBI 主站 (包含 PubMed)
    "DOMAIN-SUFFIX,nih.gov,DIRECT", // NIH 主站 (上级机构)
    // RSC (Royal Society of Chemistry)
    "DOMAIN-KEYWORD,rsc,DIRECT", // 涵盖 pubs.rsc.org 等
    "DOMAIN-SUFFIX,rsc.org,DIRECT",
    // SAGE Publishing
    "DOMAIN-KEYWORD,sagepub,DIRECT", // 涵盖 journals.sagepub.com 等
    "DOMAIN-SUFFIX,sagepub.com,DIRECT",
    // Springer Nature (Springer, Nature, BMC)
    "DOMAIN-KEYWORD,springer,DIRECT", // 涵盖 link.springer.com 等
    "DOMAIN-SUFFIX,springer.com,DIRECT",
    "DOMAIN-KEYWORD,springerlink,DIRECT", // 旧域名/别名
    "DOMAIN-KEYWORD,springernature,DIRECT", // 公司主域
    "DOMAIN-SUFFIX,springernature.com,DIRECT",
    "DOMAIN-KEYWORD,biomedcentral,DIRECT", // BMC (BioMed Central, Springer Nature旗下)
    "DOMAIN-SUFFIX,biomedcentral.com,DIRECT",
    // Taylor & Francis (T&F)
    "DOMAIN-KEYWORD,tandfonline,DIRECT", // T&F 平台
    "DOMAIN-SUFFIX,tandfonline.com,DIRECT",
    "DOMAIN-KEYWORD,taylorfrancis,DIRECT", // 公司主域
    "DOMAIN-SUFFIX,taylorfrancis.com,DIRECT",
    "DOMAIN-KEYWORD,taylorandfrancis,DIRECT", // 公司别名
    "DOMAIN-SUFFIX,taylorandfrancis.com,DIRECT",
    // Wiley
    "DOMAIN-KEYWORD,wiley,DIRECT", // 涵盖 onlinelibrary.wiley.com 等
    "DOMAIN-SUFFIX,wiley.com,DIRECT",
    "DOMAIN-KEYWORD,onlinelibrary,DIRECT", // Wiley Online Library 的一部分
    "DOMAIN-SUFFIX,onlinelibrary.wiley.com,DIRECT", // 精确匹配平台域名
    // researchgate
    "DOMAIN-KEYWORD,researchgate,DIRECT",
    // == 支持性服务 & CDN ==
    "DOMAIN-KEYWORD,disqus,DIRECT", // 评论系统 (如 acm-prod.disqus.com)
    "DOMAIN-SUFFIX,disqus.com,DIRECT",
    "DOMAIN-KEYWORD,readspeaker,DIRECT", // 文本转语音服务
    "DOMAIN-SUFFIX,readspeaker.com,DIRECT",
    "DOMAIN-KEYWORD,mathjax,DIRECT", // 数学公式渲染
    "DOMAIN-SUFFIX,mathjax.org,DIRECT",
    "DOMAIN-KEYWORD,cloudfront,DIRECT", // Amazon CDN
    "DOMAIN-SUFFIX,cloudfront.net,DIRECT",
    "DOMAIN-KEYWORD,els-cdn,DIRECT", // Elsevier CDN
    "DOMAIN-SUFFIX,els-cdn.com,DIRECT",
    "DOMAIN-KEYWORD,sciencedirectassets,DIRECT", // ScienceDirect 静态资源
    "DOMAIN-SUFFIX,sciencedirectassets.com,DIRECT",
    // "DOMAIN-KEYWORD,googleapis,DIRECT", // Google APIs (字体、地图等)
    // "DOMAIN-SUFFIX,googleapis.com,DIRECT",
    // "DOMAIN-KEYWORD,gstatic,DIRECT", // Google 静态资源
    // "DOMAIN-SUFFIX,gstatic.com,DIRECT",
    "DOMAIN-KEYWORD,bootstrapcdn,DIRECT", // Bootstrap CDN
    "DOMAIN-SUFFIX,bootstrapcdn.com,DIRECT",
    "DOMAIN-KEYWORD,jquery,DIRECT", // jQuery CDN (虽然常自托管)
    "DOMAIN-SUFFIX,jquery.com,DIRECT",
    "DOMAIN-KEYWORD,cloudflare,DIRECT", // Cloudflare CDN & 安全服务
    "DOMAIN-SUFFIX,cloudflare.com,DIRECT",
    "DOMAIN-KEYWORD,akamai,DIRECT", // Akamai CDN
    "DOMAIN-SUFFIX,akamaized.net,DIRECT",
    "DOMAIN-SUFFIX,akamaihd.net,DIRECT",
    "DOMAIN-KEYWORD,highwire,DIRECT", // HighWire Press (某些期刊平台)
    "DOMAIN-SUFFIX,highwire.org,DIRECT",
    "DOMAIN-SUFFIX,highwirepress.com,DIRECT",
    "DOMAIN-KEYWORD,silverchair,DIRECT", // Silverchair (某些期刊平台)
    "DOMAIN-SUFFIX,silverchair.com,DIRECT",
    "DOMAIN-KEYWORD,shibboleth,DIRECT", // Shibboleth 认证相关
    "DOMAIN-KEYWORD,orcid,DIRECT", // ORCID 认证
    "DOMAIN-SUFFIX,orcid.org,DIRECT",
    // == 其他您列表中的条目 (保留) ==
    "DOMAIN-KEYWORD,steam,DIRECT", // Steam (游戏平台)
    "DOMAIN-KEYWORD,safenames,DIRECT", // 域名注册商 (Elsevier等在使用)
    "DOMAIN-KEYWORD,reedelsevier,DIRECT", // Elsevier 母公司曾用名 RELX
    "DOMAIN-KEYWORD,tableau,DIRECT", // 数据可视化工具 (可能嵌入使用)
    "DOMAIN-KEYWORD,cherrystudio,DIRECT", // (未知具体关联，保留)
    "DOMAIN-KEYWORD,tuchong,DIRECT", // 图虫 (图片库)

  ];

  // 将新的规则添加到现有的规则中
  oldRules = newRules.concat(oldRules);

  // 更新配置的规则
  config.rules = oldRules;

  // 返回修改后的配置
  return config;
}

