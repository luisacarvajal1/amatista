import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './chunks/astro_TSD14xp_.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"comunidad/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/comunidad","isIndex":false,"type":"page","pattern":"^\\/comunidad\\/?$","segments":[[{"content":"comunidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/comunidad.astro","pathname":"/comunidad","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contacto/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"legales/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/legales","isIndex":false,"type":"page","pattern":"^\\/legales\\/?$","segments":[[{"content":"legales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/legales.astro","pathname":"/legales","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"nosotras/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/nosotras","isIndex":false,"type":"page","pattern":"^\\/nosotras\\/?$","segments":[[{"content":"nosotras","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/nosotras.astro","pathname":"/nosotras","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"test/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/test","isIndex":false,"type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tienda/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tienda","isIndex":true,"type":"page","pattern":"^\\/tienda\\/?$","segments":[[{"content":"tienda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tienda/index.astro","pathname":"/tienda","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://amatistacomunidad.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/javier/Dev/amatista/src/components/DarkModeSwitcher.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/layouts/partials/Header.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/about/About.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/comunidad.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/comunidad@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/contacto.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contacto@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/legales.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/legales@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/nosotras.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/nosotras@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/tienda/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tienda/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/community/Comunity.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/contact/Contact.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/home/Home.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/legal/Legal.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/product/Product.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/modules/shop/Shop.astro",{"propagation":"in-tree","containsHead":false}],["/home/javier/Dev/amatista/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Cqdwc3Os.mjs","\u0000@astrojs-manifest":"manifest_cSt2bXhg.mjs","/home/javier/Dev/amatista/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Hb05nn4I.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DksXqMnc.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_D9e8LNdV.mjs","\u0000@astro-page:src/pages/comunidad@_@astro":"chunks/comunidad_ByXVlv-i.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"chunks/contacto_U0P-I6fL.mjs","\u0000@astro-page:src/pages/legales@_@astro":"chunks/legales_B12agSTp.mjs","\u0000@astro-page:src/pages/nosotras@_@astro":"chunks/nosotras_DPHv0oVS.mjs","\u0000@astro-page:src/pages/test@_@astro":"chunks/test_Bz_Zv1hy.mjs","\u0000@astro-page:src/pages/tienda/index@_@astro":"chunks/index_iKTF_qmy.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D2OSL_5c.mjs","@/react/Shop.tsx":"_astro/Shop.yUKnLh1-.js","/astro/hoisted.js?q=0":"_astro/hoisted.Djh_oyBi.js","@astrojs/react/client.js":"_astro/client.D9Vng9vH.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/lora-cyrillic-ext-wght-normal.B-VR811w.woff2","/_astro/lora-cyrillic-wght-normal.Cl0-RjC8.woff2","/_astro/lora-vietnamese-wght-normal.DLnuHsqT.woff2","/_astro/lora-latin-ext-wght-normal.Ds-_diBN.woff2","/_astro/lora-latin-wght-normal.Dfln3rOZ.woff2","/_astro/roboto-cyrillic-400-normal.DVDTZtmW.woff2","/_astro/roboto-cyrillic-ext-400-normal.DORK9bGA.woff2","/_astro/roboto-latin-400-normal.mTIRXP6Y.woff2","/_astro/roboto-greek-400-normal.BRWHCUYo.woff2","/_astro/roboto-latin-ext-400-normal.4bLplyDh.woff2","/_astro/roboto-vietnamese-400-normal.kCRe3VZk.woff2","/_astro/roboto-latin-400-normal.BU1SoK4h.woff","/_astro/roboto-cyrillic-400-normal.DCQqOlfN.woff","/_astro/roboto-cyrillic-ext-400-normal.-KougVX-.woff","/_astro/roboto-latin-ext-400-normal.DloBNwoc.woff","/_astro/roboto-vietnamese-400-normal.BkEBOAV9.woff","/_astro/roboto-greek-400-normal.BnGNaKeW.woff","/_astro/packaging-1.kMAXrRRo.jpeg","/_astro/1_1.BmUkKFLF.webp","/_astro/packaging-3.CUKis5oV.png","/_astro/packaging-2.utfpOhqY.png","/_astro/kit-reiki.CYh872PH.png","/_astro/comunidad.Cy3UhJKu.css","/_astro/comunidad.CSSuifkP.css","/favicon.svg","/_astro/Shop.yUKnLh1-.js","/_astro/client.D9Vng9vH.js","/_astro/hoisted.Djh_oyBi.js","/_astro/index.NEDEFKed.js","/images/kit-reiki.png","/images/logo-amatista.svg","/images/logo.jpeg","/images/packaging-1.jpeg","/images/packaging-2.png","/images/packaging-3.png","/images/products/1_1.webp","/images/products/1_2.webp","/images/pages/home/hero-bg-1.jpeg","/images/pages/home/hero-bg-2.jpeg","/images/pages/home/hero-bg-3.jpeg","/404.html","/comunidad/index.html","/contacto/index.html","/legales/index.html","/nosotras/index.html","/test/index.html","/tienda/index.html","/index.html"],"buildFormat":"directory"});

export { manifest };