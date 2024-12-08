import{j as e,r as a,c as b,a as T}from"./app-D2sYips_.js";import{b as _,d as u,r as E,T as Q}from"./Footer-CWJGSluG.js";import{P as g}from"./PrimaryButton-DNhmhWfk.js";function O(){return e.jsx("div",{className:" fixed bottom-10 right-5 tooltip tooltip-open tooltip-left flex md:hidden","data-tip":"Kirim pertanyaan",children:e.jsx(_,{src:"https://img.icons8.com/?size=100&id=Li1YuxryCXFK&format=png&color=FFFFFF",htmlFor:"my_modal_6",className:"btn btn-md btn-circle hid"})})}function $(){const[n,o]=a.useState([]),[c,m]=a.useState(!0),[t,f]=a.useState(null),[h,p]=a.useState(15);a.useEffect(()=>{(async()=>{try{const y=(await b.get("api/users")).data.sort((v,C)=>C.points-v.points);o(y),m(!1)}catch{f("Failed to fetch data"),m(!1)}})()},[]);const N=()=>{p(l=>l+5)};return c?e.jsx("div",{className:"flex animate-pulse bg-gray-200 rounded-xl items-center justify-center col-span-12 md:col-span-3 min-h-screen",children:e.jsx("span",{className:"loading loading-infinity loading-lg"})}):t?e.jsx("div",{children:t}):e.jsxs("div",{className:"col-span-12 md:col-span-3 p-2  border-secondary  border rounded-xl",children:[e.jsx("h1",{className:"font-extrabold p-2  border-b-2 border-secondary/30",children:"Cakra Tercerdas"}),e.jsx("table",{className:"flex flex-col mt-2",children:e.jsx("tbody",{children:n.slice(0,h).map((l,i)=>e.jsx("tr",{className:"flex p-1 font-medium items-center justify-start ",children:e.jsxs("td",{className:"flex items-center gap-2 justify-start",children:[e.jsx("span",{className:`btn-md btn btn-circle hover:btn-lg transition-all ease-in duration-100  flex items-center justify-center rounded-full ${i>=0&&i<=2?"bg-yellow-400 text-primary cursor-default hover:text-2xl hover:animate-pulse hover:bg-yellow-300 ":""}`,children:i+1}),e.jsxs("p",{className:"flex  flex-col items-start justify-center ",children:[e.jsx("span",{children:l.username}),e.jsx("span",{children:e.jsx("span",{className:"text-xs text-secondary/70",children:l.points})})]})]})},l.id))})}),h<n.length&&e.jsx("div",{className:"flex justify-center items-center p-5",children:e.jsx(g,{onClick:N,label:"Lihat lebih banyak",className:"btn btn-xs bg-transparent text-secondary"})})]})}const B=()=>{const[n,o]=a.useState([]),[c,m]=a.useState("");return a.useEffect(()=>{b.get("api/topics").then(t=>{o(t.data)}).catch(t=>{console.error("Error fetching topics:",t)})},[]),e.jsxs("select",{className:"select-md w-max bg-secondary/10 rounded-full",value:c,onChange:t=>m(t.target.value),children:[e.jsx("option",{className:"font-bold",disabled:!0,value:"",children:"Pilih kategori topik"}),n.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]})},P=({value:n,onChange:o,placeholder:c})=>e.jsx("textarea",{className:"textarea textarea-bordered resize-none min-h-[200px] rounded-md w-full mt-5",value:n,onChange:o,placeholder:c});function U(){return e.jsxs(e.Fragment,{children:[e.jsx(_,{label:"MULAI BERTANYA!",htmlFor:"my_modal_6",className:"btn w-1/2"}),e.jsx("input",{type:"checkbox",id:"my_modal_6",className:"modal-toggle"}),e.jsx("div",{className:"modal",role:"dialog",children:e.jsxs("div",{className:"flex flex-col gap-2 modal-box",children:[e.jsxs("div",{className:"flex  justify-between items-center",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Ajukan pertanyaan mu !"}),e.jsx(_,{src:"https://img.icons8.com/?size=100&id=2i5n7zNvArOt&format=png&color=FFFFFF",htmlFor:"my_modal_6",className:"btn btn-sm btn-circle"})]}),e.jsx(P,{placeholder:"Tulisl perntanyaanmu (simple & jelas lebih cepat terjawab)"}),e.jsx(B,{}),e.jsx(g,{label:"Ajukan",className:"btn btn-md"})]})})]})}function D(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"min-h-[300px] flex flex-col gap-10 p-2 items-center justify-center",children:[e.jsx("h1",{className:" text-center  xs:text-4xl  md:text-5xl    font-extrabold",children:"Punya Pertanyaan?"}),e.jsx(U,{})]})})}u.extend(E);const K=({searchQuery:n})=>{const[o,c]=a.useState([]),[m,t]=a.useState(!0),[f,h]=a.useState(15),[p,N]=a.useState("created_at"),[l,i]=a.useState("desc");a.useEffect(()=>{u.locale("id");const s=b.get("api/questions"),d=b.get("api/topics");Promise.all([s,d]).then(([r,x])=>{const L=r.data,k=x.data,S=L.map(j=>{const F=k.find(A=>A.id===j.topic_id);return{...j,topic_name:F?F.name:"Unknown",user_name:j.user?j.user.username:"Unknown"}});c(S)}).catch(r=>console.error("Error fetching data:",r)).finally(()=>t(!1))},[]);const y=()=>{h(s=>s+10)},v=s=>{const d=s.target.value,[r,x]=d.split("-");N(r),i(x)},w=[...o].sort((s,d)=>{if(p==="created_at"){const r=u(s.created_at),x=u(d.created_at);return l==="asc"?r.diff(x):x.diff(r)}else if(p==="topic_name")return l==="asc"?s.topic_name.localeCompare(d.topic_name):d.topic_name.localeCompare(s.topic_name);return 0}).filter(s=>s.title.toLowerCase().includes(n.toLowerCase())||s.topic_name.toLowerCase().includes(n.toLowerCase())||s.content.toLowerCase().includes(n.toLowerCase()));return m?e.jsx("div",{className:"flex rounded-xl col-span-12 md:col-span-6 animate-pulse bg-gray-200 items-center justify-center h-screen",children:e.jsx("span",{className:"loading loading-infinity loading-lg"})}):e.jsxs("div",{className:"rounded-xl col-span-12 md:col-span-6 flex flex-col justify-center border border-secondary items-center ",children:[e.jsx(D,{}),e.jsx("div",{className:"border-t-2 flex p-4 w-full justify-start",children:e.jsxs("select",{onChange:v,value:`${p}-${l}`,className:"select rounded-full select-bordered",children:[e.jsx("option",{disabled:!0,selected:!0,className:"font-bold",children:"Urutkan"}),e.jsx("option",{value:"created_at-desc",children:"Terbaru"}),e.jsx("option",{value:"created_at-asc",children:"Terlama"}),e.jsx("option",{value:"topic_name-asc",children:"Topik (A-Z)"}),e.jsx("option",{value:"topic_name-desc",children:"Topik (Z-A)"})]})}),w.length>0?w.slice(0,f).map(s=>e.jsxs("div",{className:"w-full flex flex-col justify-between border-b-2 min-h-[200px] gap-4 p-5",children:[e.jsxs("div",{className:"flex gap-1 justify-start items-center",children:[e.jsx("div",{className:"avatar",children:e.jsx("div",{className:"w-10 rounded-full",children:e.jsx("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",alt:"Avatar"})})}),e.jsx("a",{href:"#",className:"font-bold text-xs sm:text-sm hover:underline",children:s.topic_name}),"|",e.jsx("p",{className:"font-bold text-sm",children:u(s.created_at).fromNow()})]}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(T,{href:route("ViewQuestion",{id:s.id}),className:"font-normal text-xl hover:underline",children:s.title})}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(T,{href:route("ViewQuestion",{id:s.id}),children:e.jsx(g,{label:"Jawab",className:"btn btn-xs bg-transparent text-secondary"})})})]},s.id)):e.jsx("div",{className:"flex min-h-44 flex-col justify-center items-center p-5",children:e.jsxs("p",{className:" text-center text-lg",children:['Tidak ada hasil dari "',e.jsx("span",{className:"font-bold",children:n}),'"']})}),f<w.length&&e.jsx("div",{className:"flex justify-center items-center p-5",children:e.jsx(g,{onClick:y,label:"Lihat semua",className:"btn btn-xs bg-transparent text-secondary"})})]})};function R(){return e.jsx("div",{className:"col-span-12 hidden md:flex md:col-span-3 flex-col gap-2",children:e.jsx(Q,{})})}export{$ as L,K as Q,R as T,O as a};
