import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("1.RxLntOti.jpg");
const _sfc_main$1 = {
  name: "HeroSection"
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" data-v-a88a5d4d><section class="hero" style="${ssrRenderStyle({ "background-color": "#4682B4" })}" data-v-a88a5d4d><div class="container" data-v-a88a5d4d><div class="main-body" data-v-a88a5d4d><div class="row gutters-sm" data-v-a88a5d4d><div class="col-md-4 mb-3" data-v-a88a5d4d><div class="card" data-v-a88a5d4d><div class="card-body" style="${ssrRenderStyle({ "background-color": "#E6E6FA" })}" data-v-a88a5d4d><div class="d-flex flex-column align-items-center text-center" data-v-a88a5d4d><img${ssrRenderAttr("src", _imports_0)} alt="Admin" class="rounded-circle" width="150" data-v-a88a5d4d><div class="mt-3" data-v-a88a5d4d><h4 data-v-a88a5d4d>Ubaid Khoir Julio Dn</h4><p class="text-secondary mb-1" data-v-a88a5d4d> Mahasiswa <a href="https://home.amikom.ac.id/" data-v-a88a5d4d>Universitas Amikom</a></p><p class="text-muted font-size-sm" data-v-a88a5d4d>Yogyakarta, Indonesia</p><button class="btn btn-primary" onclick="window.location=&#39;mailto:22ubaidkh@gmail.com&#39;" data-v-a88a5d4d> Message </button></div></div></div></div><div class="card mt-3" data-v-a88a5d4d><ul class="list-group list-group-flush" style="${ssrRenderStyle({ "background-color": "#E6E6FA" })}" data-v-a88a5d4d><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline" data-v-a88a5d4d><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-a88a5d4d></path></svg>Github </h6><span class="text-secondary" onclick="window.location=&#39;https://github.com/22ubeth&#39;" data-v-a88a5d4d>22ubeth</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger" data-v-a88a5d4d><rect x="2" y="2" width="20" height="20" rx="5" ry="5" data-v-a88a5d4d></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" data-v-a88a5d4d></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" data-v-a88a5d4d></line></svg>Instagram </h6><span class="text-secondary" onclick="window.location=&#39;https://www.instagram.com/ubeth_pratama/&#39;" data-v-a88a5d4d>@ubeth_pratama</span></li><li class="list-group-item d-flex justify-content-between align-items-center flex-wrap" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary" data-v-a88a5d4d><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-a88a5d4d></path></svg>Facebook </h6><span class="text-secondary" onclick="window.location=&#39;https://www.facebook.com/ubeth35&#39;" data-v-a88a5d4d>@ubeth35</span></li></ul></div></div><div class="col-md-8" style="${ssrRenderStyle({ "background-color": "#E6E6FA" })}" data-v-a88a5d4d><div class="card mb-3" data-v-a88a5d4d><div class="card-body" data-v-a88a5d4d><div class="row" data-v-a88a5d4d><div class="col-sm-3" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d>Full Name</h6></div><div class="col-sm-9 text-secondary" data-v-a88a5d4d> Ubaid Khoir Julio Dn </div></div><hr data-v-a88a5d4d><div class="row" data-v-a88a5d4d><div class="col-sm-3" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d>Email</h6></div><div class="col-sm-9 text-secondary" data-v-a88a5d4d>22ubaidkh@gmail.com</div></div><hr data-v-a88a5d4d><div class="row" data-v-a88a5d4d><div class="col-sm-3" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d>Phone</h6></div><div class="col-sm-9 text-secondary" data-v-a88a5d4d>+6285221816515</div></div><hr data-v-a88a5d4d><hr data-v-a88a5d4d><div class="row" data-v-a88a5d4d><div class="col-sm-3" data-v-a88a5d4d><h6 class="mb-0" data-v-a88a5d4d>Address</h6></div><div class="col-sm-9 text-secondary" data-v-a88a5d4d> Yogyakarta, Indonesia </div></div><hr data-v-a88a5d4d><div class="row" data-v-a88a5d4d></div></div></div><div class="row gutters-sm" data-v-a88a5d4d><div class="col-sm-6 mb-3" data-v-a88a5d4d><div class="card h-100" data-v-a88a5d4d><div class="card-body" data-v-a88a5d4d><h6 class="d-flex align-items-center mb-3" data-v-a88a5d4d> Project Status </h6><small data-v-a88a5d4d>Web Design</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "90%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>Website Markup</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "85%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>One Page</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "90%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>Mobile Template</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>Backend API</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "40%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div></div></div></div><div class="col-sm-6 mb-3" data-v-a88a5d4d><div class="card h-100" data-v-a88a5d4d><div class="card-body" data-v-a88a5d4d><h6 class="d-flex align-items-center mb-3" data-v-a88a5d4d> Project Status </h6><small data-v-a88a5d4d>Web Design</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "80%" })}" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>Website Markup</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "72%" })}" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>One Page</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "89%" })}" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>Mobile Template</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "55%" })}" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div><small data-v-a88a5d4d>Backend API</small><div class="progress mb-3" style="${ssrRenderStyle({ "height": "5px" })}" data-v-a88a5d4d><div class="progress-bar bg-primary" role="progressbar" style="${ssrRenderStyle({ "width": "66%" })}" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100" data-v-a88a5d4d></div></div></div></div></div></div></div></div></div></div></section><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-a88a5d4d"]]);
const _sfc_main = {
  components: {
    HeroSection: __nuxt_component_0
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeroSection = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-T8V2vU2U.mjs.map
