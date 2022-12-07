

<h1>
@stagas/immutable-list <a href="https://npmjs.org/package/@stagas/immutable-list"><img src="https://img.shields.io/badge/npm-v1.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-210-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/@stagas/immutable-list@1.0.1/dist/@stagas/immutable-list.min.js"><img src="https://img.shields.io/badge/brotli-1.3K-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Immutable list.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i @stagas/immutable-list </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add @stagas/immutable-list </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add @stagas/immutable-list</code>
</td></tr></table>
</h4>

## Examples

<details id="example$node" title="node" open><summary><span><a href="#example$node">#</a></span>  <code><strong>node</strong></code></summary>  <ul>    <details id="source$node" title="node source code" open><summary><span><a href="#source$node">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/node.ts">example/node.ts</a>  <p>

```ts
import { add } from '@stagas/immutable-list'

console.log(add(1, 2))
```

</p>
</details></ul></details><details id="example$web" title="web" open><summary><span><a href="#example$web">#</a></span>  <code><strong>web</strong></code></summary>  <ul>    <details id="source$web" title="web source code" open><summary><span><a href="#source$web">#</a></span>  <code><strong>view source</strong></code></summary>  <a href="example/web.ts">example/web.ts</a>  <p>

```ts
import { add } from '@stagas/immutable-list'

const main = document.querySelector('main')!

main.innerHTML = `<h1>1 + 2 = ${add(1, 2)}</h1>`
```

</p>
</details></ul></details>


# [🥁 Use this template 🥁](https://github.com/stagas/typescript-minimal-template/generate)

## Features

- TypeScript with [SWC](https://swc.rs/)
- **JSX/TSX** out of the box
- Outputs both **CommonJS** and **ES Modules**, ready to **publish on npm**
- Automatic dist bundling using [bunzee](https://github.com/stagas/bunzee)
- Documentation generation using [dokio](https://github.com/stagas/dokio)
- Isomorphic Node.js and real browser testing incl. coverage and snapshots with [utr](https://github.com/stagas/utr)
- Examples / Playground using [devito](https://github.com/stagas/devito)
- Evergreen using [pull-configs](https://github.com/stagas/pull-configs)
- [ESLint](https://eslint.org/)
- [dprint](https://dprint.dev/)
- [Husky](https://typicode.github.io/husky/)




## API

<p>  <details id="JSONAble$46" title="Class" ><summary><span><a href="#JSONAble$46">#</a></span>  <code><strong>JSONAble</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="constructor$48" title="Constructor" ><summary><span><a href="#constructor$48">#</a></span>  <code><strong>constructor</strong></code><em>(data)</em>    </summary>  <a href=""></a>  <ul>    <p>  <details id="new JSONAble$49" title="ConstructorSignature" ><summary><span><a href="#new JSONAble$49">#</a></span>  <code><strong>new JSONAble</strong></code><em>()</em>    </summary>    <ul><p><a href="#JSONAble$46">JSONAble</a>&lt;<a href="#T$50">T</a>&gt;</p>      <p>  <details id="data$51" title="Parameter" ><summary><span><a href="#data$51">#</a></span>  <code><strong>data</strong></code>    </summary>    <ul><p>any</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="onceSymbol$47" title="Property" ><summary><span><a href="#onceSymbol$47">#</a></span>  <code><strong>onceSymbol</strong></code>    </summary>  <a href=""></a>  <ul><p>symbol</p>        </ul></details><details id="emit$55" title="Method" ><summary><span><a href="#emit$55">#</a></span>  <code><strong>emit</strong></code><em>(eventName, args)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$58" title="Parameter" ><summary><span><a href="#eventName$58">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$57">K</a></p>        </ul></details><details id="args$59" title="Parameter" ><summary><span><a href="#args$59">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p><span>Parameters</span>&lt;<a href="#T$50">T</a>  [<a href="#K$57">K</a>]&gt;</p>        </ul></details>  <p><strong>emit</strong>&lt;<span>K</span>&gt;<em>(eventName, args)</em>  &nbsp;=&gt;  <ul><a href="#JSONAble$46">JSONAble</a>&lt;<a href="#T$50">T</a>&gt;</ul></p></p>    </ul></details><details id="off$66" title="Method" ><summary><span><a href="#off$66">#</a></span>  <code><strong>off</strong></code><em>(eventName, callback)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$69" title="Parameter" ><summary><span><a href="#eventName$69">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$68">K</a></p>        </ul></details><details id="callback$70" title="Parameter" ><summary><span><a href="#callback$70">#</a></span>  <code><strong>callback</strong></code>    </summary>    <ul><p><a href="#T$50">T</a>  [<a href="#K$68">K</a>]</p>        </ul></details>  <p><strong>off</strong>&lt;<span>K</span>&gt;<em>(eventName, callback)</em>  &nbsp;=&gt;  <ul>undefined | <a href="#JSONAble$46">JSONAble</a>&lt;<a href="#T$50">T</a>&gt;</ul></p></p>    </ul></details><details id="on$60" title="Method" ><summary><span><a href="#on$60">#</a></span>  <code><strong>on</strong></code><em>(eventName, callback, options)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$63" title="Parameter" ><summary><span><a href="#eventName$63">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$62">K</a></p>        </ul></details><details id="callback$64" title="Parameter" ><summary><span><a href="#callback$64">#</a></span>  <code><strong>callback</strong></code>    </summary>    <ul><p><a href="#T$50">T</a>  [<a href="#K$62">K</a>]</p>        </ul></details><details id="options$65" title="Parameter" ><summary><span><a href="#options$65">#</a></span>  <code><strong>options</strong></code>    </summary>    <ul><p><span>EventEmitterOptions</span></p>        </ul></details>  <p><strong>on</strong>&lt;<span>K</span>&gt;<em>(eventName, callback, options)</em>  &nbsp;=&gt;  <ul><span>Off</span></ul></p></p>    </ul></details><details id="once$71" title="Method" ><summary><span><a href="#once$71">#</a></span>  <code><strong>once</strong></code><em>(eventName, callback)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$74" title="Parameter" ><summary><span><a href="#eventName$74">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$73">K</a></p>        </ul></details><details id="callback$75" title="Parameter" ><summary><span><a href="#callback$75">#</a></span>  <code><strong>callback</strong></code>    </summary>    <ul><p><a href="#T$50">T</a>  [<a href="#K$73">K</a>]</p>        </ul></details>  <p><strong>once</strong>&lt;<span>K</span>&gt;<em>(eventName, callback)</em>  &nbsp;=&gt;  <ul><a href="#JSONAble$46">JSONAble</a>&lt;<a href="#T$50">T</a>&gt;</ul></p></p>    </ul></details><details id="toJSON$52" title="Method" ><summary><span><a href="#toJSON$52">#</a></span>  <code><strong>toJSON</strong></code><em>(this)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="this$54" title="Parameter" ><summary><span><a href="#this$54">#</a></span>  <code><strong>this</strong></code>    </summary>    <ul><p><a href="#JSONAble$46">JSONAble</a>&lt;<a href="#T$50">T</a>&gt;</p>        </ul></details>  <p><strong>toJSON</strong><em>(this)</em>  &nbsp;=&gt;  <ul><span>Partial</span>&lt;<a href="#JSONAble$46">JSONAble</a>&lt;<a href="#T$50">T</a>&gt;&gt;</ul></p></p>    </ul></details></p></ul></details><details id="List$77" title="Class" ><summary><span><a href="#List$77">#</a></span>  <code><strong>List</strong></code>    </summary>  <a href=""></a>  <ul>        <p>  <details id="constructor$79" title="Constructor" ><summary><span><a href="#constructor$79">#</a></span>  <code><strong>constructor</strong></code><em>(data)</em>    </summary>  <a href=""></a>  <ul>    <p>  <details id="new List$80" title="ConstructorSignature" ><summary><span><a href="#new List$80">#</a></span>  <code><strong>new List</strong></code><em>()</em>    </summary>    <ul><p><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</p>      <p>  <details id="data$83" title="Parameter" ><summary><span><a href="#data$83">#</a></span>  <code><strong>data</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>{}</code></span>  </summary>    <ul><p><span>Partial</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <span>Record</span>&lt;string, any&gt;&gt;&gt;</p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="ctor$85" title="Property" ><summary><span><a href="#ctor$85">#</a></span>  <code><strong>ctor</strong></code>    </summary>  <a href=""></a>  <ul><p><span>Class</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;&gt;</p>        </ul></details><details id="items$84" title="Property" ><summary><span><a href="#items$84">#</a></span>  <code><strong>items</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>[]</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#T$81">T</a>  []</p>        </ul></details><details id="onceSymbol$78" title="Property" ><summary><span><a href="#onceSymbol$78">#</a></span>  <code><strong>onceSymbol</strong></code>    </summary>  <a href=""></a>  <ul><p>symbol</p>        </ul></details><details id="add$89" title="Method" ><summary><span><a href="#add$89">#</a></span>  <code><strong>add</strong></code><em>(item)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="item$91" title="Parameter" ><summary><span><a href="#item$91">#</a></span>  <code><strong>item</strong></code>    </summary>    <ul><p><a href="#T$81">T</a></p>        </ul></details>  <p><strong>add</strong><em>(item)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt; &amp; <span>Partial</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;&gt; &amp; {<p>  <details id="items$93" title="Property" ><summary><span><a href="#items$93">#</a></span>  <code><strong>items</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#T$81">T</a>  []</p>        </ul></details></p>}</ul></p></p>    </ul></details><details id="emit$134" title="Method" ><summary><span><a href="#emit$134">#</a></span>  <code><strong>emit</strong></code><em>(eventName, args)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$137" title="Parameter" ><summary><span><a href="#eventName$137">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$57">K</a></p>        </ul></details><details id="args$138" title="Parameter" ><summary><span><a href="#args$138">#</a></span>  <code><strong>args</strong></code>    </summary>    <ul><p><span>Parameters</span>&lt;<a href="#R$82">R</a>  [<a href="#K$57">K</a>]&gt;</p>        </ul></details>  <p><strong>emit</strong>&lt;<span>K</span>&gt;<em>(eventName, args)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</ul></p></p>    </ul></details><details id="equals$86" title="Method" ><summary><span><a href="#equals$86">#</a></span>  <code><strong>equals</strong></code><em>(other)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="other$88" title="Parameter" ><summary><span><a href="#other$88">#</a></span>  <code><strong>other</strong></code>    </summary>    <ul><p><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <span>Record</span>&lt;string, any&gt;&gt;</p>        </ul></details>  <p><strong>equals</strong><em>(other)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details><details id="getById$94" title="Method" ><summary><span><a href="#getById$94">#</a></span>  <code><strong>getById</strong></code><em>(itemId)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="itemId$97" title="Parameter" ><summary><span><a href="#itemId$97">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string | <code>false</code></p>        </ul></details>  <p><strong>getById</strong>&lt;<span>U</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(itemId)</em>  &nbsp;=&gt;  <ul><a href="#U$96">U</a></ul></p></p>    </ul></details><details id="hasId$103" title="Method" ><summary><span><a href="#hasId$103">#</a></span>  <code><strong>hasId</strong></code><em>(itemId)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="itemId$105" title="Parameter" ><summary><span><a href="#itemId$105">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>hasId</strong><em>(itemId)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details><details id="insertAfterIndex$125" title="Method" ><summary><span><a href="#insertAfterIndex$125">#</a></span>  <code><strong>insertAfterIndex</strong></code><em>(index, newItem)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="index$127" title="Parameter" ><summary><span><a href="#index$127">#</a></span>  <code><strong>index</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="newItem$128" title="Parameter" ><summary><span><a href="#newItem$128">#</a></span>  <code><strong>newItem</strong></code>    </summary>    <ul><p><a href="#T$81">T</a></p>        </ul></details>  <p><strong>insertAfterIndex</strong><em>(index, newItem)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt; &amp; <span>Partial</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;&gt; &amp; {<p>  <details id="items$130" title="Property" ><summary><span><a href="#items$130">#</a></span>  <code><strong>items</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#T$81">T</a>  []</p>        </ul></details></p>}</ul></p></p>    </ul></details><details id="insertAt$119" title="Method" ><summary><span><a href="#insertAt$119">#</a></span>  <code><strong>insertAt</strong></code><em>(index, newItem)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="index$121" title="Parameter" ><summary><span><a href="#index$121">#</a></span>  <code><strong>index</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="newItem$122" title="Parameter" ><summary><span><a href="#newItem$122">#</a></span>  <code><strong>newItem</strong></code>    </summary>    <ul><p><a href="#T$81">T</a></p>        </ul></details>  <p><strong>insertAt</strong><em>(index, newItem)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt; &amp; <span>Partial</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;&gt; &amp; {<p>  <details id="items$124" title="Property" ><summary><span><a href="#items$124">#</a></span>  <code><strong>items</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#T$81">T</a>  []</p>        </ul></details></p>}</ul></p></p>    </ul></details><details id="mergeEach$111" title="Method" ><summary><span><a href="#mergeEach$111">#</a></span>  <code><strong>mergeEach</strong></code><em>(data)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="data$113" title="Parameter" ><summary><span><a href="#data$113">#</a></span>  <code><strong>data</strong></code>    </summary>    <ul><p><span>Partial</span>&lt;<a href="#T$81">T</a>&gt;</p>        </ul></details>  <p><strong>mergeEach</strong><em>(data)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</ul></p></p>    </ul></details><details id="off$145" title="Method" ><summary><span><a href="#off$145">#</a></span>  <code><strong>off</strong></code><em>(eventName, callback)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$148" title="Parameter" ><summary><span><a href="#eventName$148">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$68">K</a></p>        </ul></details><details id="callback$149" title="Parameter" ><summary><span><a href="#callback$149">#</a></span>  <code><strong>callback</strong></code>    </summary>    <ul><p><a href="#R$82">R</a>  [<a href="#K$68">K</a>]</p>        </ul></details>  <p><strong>off</strong>&lt;<span>K</span>&gt;<em>(eventName, callback)</em>  &nbsp;=&gt;  <ul>undefined | <a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</ul></p></p>    </ul></details><details id="on$139" title="Method" ><summary><span><a href="#on$139">#</a></span>  <code><strong>on</strong></code><em>(eventName, callback, options)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$142" title="Parameter" ><summary><span><a href="#eventName$142">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$62">K</a></p>        </ul></details><details id="callback$143" title="Parameter" ><summary><span><a href="#callback$143">#</a></span>  <code><strong>callback</strong></code>    </summary>    <ul><p><a href="#R$82">R</a>  [<a href="#K$62">K</a>]</p>        </ul></details><details id="options$144" title="Parameter" ><summary><span><a href="#options$144">#</a></span>  <code><strong>options</strong></code>    </summary>    <ul><p><span>EventEmitterOptions</span></p>        </ul></details>  <p><strong>on</strong>&lt;<span>K</span>&gt;<em>(eventName, callback, options)</em>  &nbsp;=&gt;  <ul><span>Off</span></ul></p></p>    </ul></details><details id="once$150" title="Method" ><summary><span><a href="#once$150">#</a></span>  <code><strong>once</strong></code><em>(eventName, callback)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="eventName$153" title="Parameter" ><summary><span><a href="#eventName$153">#</a></span>  <code><strong>eventName</strong></code>    </summary>    <ul><p><a href="#K$73">K</a></p>        </ul></details><details id="callback$154" title="Parameter" ><summary><span><a href="#callback$154">#</a></span>  <code><strong>callback</strong></code>    </summary>    <ul><p><a href="#R$82">R</a>  [<a href="#K$73">K</a>]</p>        </ul></details>  <p><strong>once</strong>&lt;<span>K</span>&gt;<em>(eventName, callback)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</ul></p></p>    </ul></details><details id="removeById$114" title="Method" ><summary><span><a href="#removeById$114">#</a></span>  <code><strong>removeById</strong></code><em>(itemId)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="itemId$116" title="Parameter" ><summary><span><a href="#itemId$116">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>removeById</strong><em>(itemId)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt; &amp; <span>Partial</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;&gt; &amp; {<p>  <details id="items$118" title="Property" ><summary><span><a href="#items$118">#</a></span>  <code><strong>items</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>  </summary>  <a href=""></a>  <ul><p><a href="#T$81">T</a>  []</p>        </ul></details></p>}</ul></p></p>    </ul></details><details id="setById$98" title="Method" ><summary><span><a href="#setById$98">#</a></span>  <code><strong>setById</strong></code><em>(itemId, newItem)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="itemId$101" title="Parameter" ><summary><span><a href="#itemId$101">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="newItem$102" title="Parameter" ><summary><span><a href="#newItem$102">#</a></span>  <code><strong>newItem</strong></code>    </summary>    <ul><p><a href="#U$100">U</a></p>        </ul></details>  <p><strong>setById</strong>&lt;<span>U</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(itemId, newItem)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</ul></p></p>    </ul></details><details id="toJSON$131" title="Method" ><summary><span><a href="#toJSON$131">#</a></span>  <code><strong>toJSON</strong></code><em>(this)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="this$133" title="Parameter" ><summary><span><a href="#this$133">#</a></span>  <code><strong>this</strong></code>    </summary>    <ul><p><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</p>        </ul></details>  <p><strong>toJSON</strong><em>(this)</em>  &nbsp;=&gt;  <ul><span>Partial</span>&lt;<a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;&gt;</ul></p></p>    </ul></details><details id="updateById$106" title="Method" ><summary><span><a href="#updateById$106">#</a></span>  <code><strong>updateById</strong></code><em>(itemId, updateData)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="itemId$109" title="Parameter" ><summary><span><a href="#itemId$109">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="updateData$110" title="Parameter" ><summary><span><a href="#updateData$110">#</a></span>  <code><strong>updateData</strong></code>    </summary>    <ul><p><span>Partial</span>&lt;<a href="#U$108">U</a>&gt;</p>        </ul></details>  <p><strong>updateById</strong>&lt;<span>U</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(itemId, updateData)</em>  &nbsp;=&gt;  <ul><a href="#List$77">List</a>&lt;<a href="#T$81">T</a>, <a href="#R$82">R</a>&gt;</ul></p></p>    </ul></details></p></ul></details><details id="ListItem$43" title="TypeAlias" ><summary><span><a href="#ListItem$43">#</a></span>  <code><strong>ListItem</strong></code>    </summary>  <a href=""></a>  <ul><p>object &amp; {<p>  <details id="id$45" title="Property" ><summary><span><a href="#id$45">#</a></span>  <code><strong>id</strong></code>    </summary>  <a href=""></a>  <ul><p>string</p>        </ul></details></p>}</p>        </ul></details><details id="createOrReturn$1" title="Function" ><summary><span><a href="#createOrReturn$1">#</a></span>  <code><strong>createOrReturn</strong></code><em>(ctor, prev, key, next)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="ctor$6" title="Parameter" ><summary><span><a href="#ctor$6">#</a></span>  <code><strong>ctor</strong></code>    </summary>    <ul><p><a href="#TCtor$5">TCtor</a></p>        </ul></details><details id="prev$7" title="Parameter" ><summary><span><a href="#prev$7">#</a></span>  <code><strong>prev</strong></code>    </summary>    <ul><p><a href="#T$3">T</a></p>        </ul></details><details id="key$8" title="Parameter" ><summary><span><a href="#key$8">#</a></span>  <code><strong>key</strong></code>    </summary>    <ul><p><a href="#TKey$4">TKey</a></p>        </ul></details><details id="next$9" title="Parameter" ><summary><span><a href="#next$9">#</a></span>  <code><strong>next</strong></code>    </summary>    <ul><p><a href="#T$3">T</a>  [<a href="#TKey$4">TKey</a>]</p>        </ul></details>  <p><strong>createOrReturn</strong>&lt;<span>T</span><span>&nbsp;extends&nbsp;</span>     <a href="#JSONAble$46">JSONAble</a>&lt;<span>Record</span>&lt;string, any&gt;, <a href="#T$3">T</a>&gt;, <span>TKey</span>, <span>TCtor</span><span>&nbsp;extends&nbsp;</span>     <span>Class</span>&lt;<a href="#T$3">T</a>&gt;&gt;<em>(ctor, prev, key, next)</em>  &nbsp;=&gt;  <ul><a href="#T$3">T</a></ul></p></p>    </ul></details><details id="getItemInListById$21" title="Function" ><summary><span><a href="#getItemInListById$21">#</a></span>  <code><strong>getItemInListById</strong></code><em>(list, itemId)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="list$24" title="Parameter" ><summary><span><a href="#list$24">#</a></span>  <code><strong>list</strong></code>    </summary>    <ul><p><a href="#T$23">T</a>  []</p>        </ul></details><details id="itemId$25" title="Parameter" ><summary><span><a href="#itemId$25">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string | <code>false</code></p>        </ul></details>  <p><strong>getItemInListById</strong>&lt;<span>T</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(list, itemId)</em>  &nbsp;=&gt;  <ul><a href="#T$23">T</a></ul></p></p>    </ul></details><details id="insertItemInListAtIndex$37" title="Function" ><summary><span><a href="#insertItemInListAtIndex$37">#</a></span>  <code><strong>insertItemInListAtIndex</strong></code><em>(list, index, newItem)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="list$40" title="Parameter" ><summary><span><a href="#list$40">#</a></span>  <code><strong>list</strong></code>    </summary>    <ul><p><a href="#T$39">T</a>  []</p>        </ul></details><details id="index$41" title="Parameter" ><summary><span><a href="#index$41">#</a></span>  <code><strong>index</strong></code>    </summary>    <ul><p>number</p>        </ul></details><details id="newItem$42" title="Parameter" ><summary><span><a href="#newItem$42">#</a></span>  <code><strong>newItem</strong></code>    </summary>    <ul><p><a href="#T$39">T</a></p>        </ul></details>  <p><strong>insertItemInListAtIndex</strong>&lt;<span>T</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(list, index, newItem)</em>  &nbsp;=&gt;  <ul><a href="#T$39">T</a>  []</ul></p></p>    </ul></details><details id="removeItemInListById$26" title="Function" ><summary><span><a href="#removeItemInListById$26">#</a></span>  <code><strong>removeItemInListById</strong></code><em>(list, itemId)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="list$29" title="Parameter" ><summary><span><a href="#list$29">#</a></span>  <code><strong>list</strong></code>    </summary>    <ul><p><a href="#T$28">T</a>  []</p>        </ul></details><details id="itemId$30" title="Parameter" ><summary><span><a href="#itemId$30">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>removeItemInListById</strong>&lt;<span>T</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(list, itemId)</em>  &nbsp;=&gt;  <ul><a href="#T$28">T</a>  []</ul></p></p>    </ul></details><details id="setItemInListById$31" title="Function" ><summary><span><a href="#setItemInListById$31">#</a></span>  <code><strong>setItemInListById</strong></code><em>(list, itemId, newItem)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="list$34" title="Parameter" ><summary><span><a href="#list$34">#</a></span>  <code><strong>list</strong></code>    </summary>    <ul><p><a href="#T$33">T</a>  []</p>        </ul></details><details id="itemId$35" title="Parameter" ><summary><span><a href="#itemId$35">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="newItem$36" title="Parameter" ><summary><span><a href="#newItem$36">#</a></span>  <code><strong>newItem</strong></code>    </summary>    <ul><p><a href="#T$33">T</a></p>        </ul></details>  <p><strong>setItemInListById</strong>&lt;<span>T</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(list, itemId, newItem)</em>  &nbsp;=&gt;  <ul><a href="#T$33">T</a>  []</ul></p></p>    </ul></details><details id="updateItemInListById$15" title="Function" ><summary><span><a href="#updateItemInListById$15">#</a></span>  <code><strong>updateItemInListById</strong></code><em>(list, itemId, updateData)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="list$18" title="Parameter" ><summary><span><a href="#list$18">#</a></span>  <code><strong>list</strong></code>    </summary>    <ul><p><a href="#T$17">T</a>  []</p>        </ul></details><details id="itemId$19" title="Parameter" ><summary><span><a href="#itemId$19">#</a></span>  <code><strong>itemId</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="updateData$20" title="Parameter" ><summary><span><a href="#updateData$20">#</a></span>  <code><strong>updateData</strong></code>    </summary>    <ul><p><span>Partial</span>&lt;<a href="#T$17">T</a>&gt;</p>        </ul></details>  <p><strong>updateItemInListById</strong>&lt;<span>T</span><span>&nbsp;extends&nbsp;</span>     <a href="#ListItem$43">ListItem</a>&gt;<em>(list, itemId, updateData)</em>  &nbsp;=&gt;  <ul>any  []</ul></p></p>    </ul></details><details id="updateOrReturn$10" title="Function" ><summary><span><a href="#updateOrReturn$10">#</a></span>  <code><strong>updateOrReturn</strong></code><em>(target, updateData)</em>    </summary>  <a href=""></a>  <ul>    <p>    <details id="target$13" title="Parameter" ><summary><span><a href="#target$13">#</a></span>  <code><strong>target</strong></code>    </summary>    <ul><p><a href="#T$12">T</a></p>        </ul></details><details id="updateData$14" title="Parameter" ><summary><span><a href="#updateData$14">#</a></span>  <code><strong>updateData</strong></code>    </summary>    <ul><p><span>Partial</span>&lt;<a href="#T$12">T</a>&gt;</p>        </ul></details>  <p><strong>updateOrReturn</strong>&lt;<span>T</span>&gt;<em>(target, updateData)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details></p>

## Credits
- [everyday-types](https://npmjs.org/package/everyday-types) by [stagas](https://github.com/stagas) &ndash; Everyday utility types
- [everyday-utils](https://npmjs.org/package/everyday-utils) by [stagas](https://github.com/stagas) &ndash; Everyday utilities

## Contributing

[Fork](https://github.com/stagas/immutable-list/fork) or [edit](https://github.dev/stagas/immutable-list) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
