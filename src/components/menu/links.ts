import type { LinkItem } from "@components/menu/interface/linkItem.ts";

export const links: LinkItem[] = [
  {
    route:"/",
    text:"Inicio",
    route_complete:"/#inicio",
    svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    subLinks : [
      {
        route:"/",
        text:"Valores",
        route_complete:"/#valores",
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-biceps-flexed-icon lucide-biceps-flexed"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"/><path d="M15 14a5 5 0 0 0-7.584 2"/><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"/></svg>'
      },  
      {
        route:"/",
        text:"Servicios",
        route_complete:"/#servicios",
        svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 640 640"><path opacity=".4" fill="currentColor" d="M440 192C440 258.3 386.3 312 320 312C253.7 312 200 258.3 200 192C200 125.7 253.7 72 320 72C386.3 72 440 125.7 440 192z"></path><path fill="currentColor" d="M350.5 368L289.5 368C279.8 368 272 375.8 272 385.5C272 389.7 273.5 393.7 276.2 396.9L303.6 428.9L272.6 544L272 544L237.4 405.5C235.2 396.8 226.3 391.5 217.9 394.7C156 418.3 112 478.3 112 548.5C112 563.6 124.3 575.9 139.4 575.9L500.5 575.9C515.6 575.9 527.9 563.6 527.9 548.5C527.9 478.3 483.9 418.3 422 394.7C413.6 391.5 404.7 396.8 402.5 405.5L367.9 544L367.3 544L336.3 428.9L363.7 396.9C366.4 393.7 367.9 389.7 367.9 385.5C367.9 375.8 360.1 368 350.4 368z"></path></svg>',    
      }, 
      {
        route:"/",
        text:"Preguntas Frecuentes",
        route_complete: "/#preguntasFrecuentes",
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>'
      }     
    ]    
  },
  {
    route:"/contactame",
    text:"Contactame",
    route_complete:"/contactame",
    svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mails-icon lucide-mails"><path d="M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732"/><path d="m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5"/><rect x="7" y="3" width="15" height="12" rx="2"/></svg>',    
  },
];