webpackJsonp([65579394461380],{201:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=l(a),s=n(2),o=l(s),r=function(){return i.default.createElement(o.default,{title:"Impact",shade:4},i.default.createElement("p",null,"The ongoing development of the design system at New Engen has resulted in:"),i.default.createElement("ul",null,i.default.createElement("li",null,"New Storybook library open to engineers, designers, and product managers"),i.default.createElement("li",null,"A single source of truth with documented designs and guidelines for their uses"),i.default.createElement("li",null,"A Figma library used to efficiently craft cohesive high-fidelity designs"),i.default.createElement("li",null,"Cross-functional team of designers and engineers that are excited about creating high quality experiences"),i.default.createElement("li",null,"Increasingly collaborative approach between design & engineering as a result of the project"),i.default.createElement("li",null,"UX team spending more time on the overall user experience and user interactions instead of focusing efforts on UI design.")))};t.default=r,e.exports=t.default},202:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=l(a),s=n(2),o=l(s),r=n(4),u=l(r),d=n(523),c=l(d),f=n(577),m=l(f),h=function(){return i.default.createElement(o.default,{shade:2,title:"Process Improvements"},i.default.createElement(s.SubSection,{title:"Cross-Functional Design System Team"},i.default.createElement("p",null,"With the support of the Director of UX, I was able to allocate some of my own time on an ongoing basis to this effort. Likewise, I met with the engineering team and identified a point person and a few others that were interested and could contribute."),i.default.createElement(u.default,{alt:"Design System Team",src:c.default})),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"Communication Touchpoints"},i.default.createElement("p",null,"With a team of contributors and stakeholders identified, we needed a forum to discuss implementation and iteration. I created two channels for these discussions:"),i.default.createElement("ul",null,i.default.createElement("li",null,"A weekly sync to run through open questions and identify next steps"),i.default.createElement("li",null,"A Slack channel for async and ad hoc decision making")),i.default.createElement(u.default,{alt:"Design System Slack communication",src:m.default})),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"System Iteration"},i.default.createElement("p",null,'In order to fully embrace our "only build what we need" principle, I created a process that the team could follow when evaluating new components or component iteration opportunities.'),i.default.createElement("iframe",{title:"Design System Iteration Process on Whimsical",style:{border:"none"},width:"100%",height:"400",src:"https://whimsical.com/embed/NJ8qF3gyHMHtSXFsxcwsKz"})))};t.default=h,e.exports=t.default},203:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=l(a),s=n(2),o=l(s),r=n(4),u=l(r),d=n(524),c=l(d),f=n(589),m=l(f),h=n(521),g=l(h),p=function(){return i.default.createElement(o.default,{shade:1,title:"Research"},i.default.createElement(s.SubSection,{title:"Existing System Audit"},i.default.createElement("p",null,"The design system work up to the point I took over was primarily based on"," ",i.default.createElement("a",{href:"https://www.carbondesignsystem.com/",target:"_blank"},"IBM Carbon design system"),". Many of the components were just placeholders and never introduced into our platform; other components were used but never standardized. During the first stage of research, I worked with the design and engineering teams to fully audit the existing system and answer the following questions:"),i.default.createElement("ul",null,i.default.createElement("li",null,i.default.createElement("em",null,"Component inventory")," - which components were being used, which were not?"),i.default.createElement("li",null,i.default.createElement("em",null,"Consistency of application")," - to what degree did components and styles in the product adhere to the system?"),i.default.createElement("li",null,i.default.createElement("em",null,"Gaps")," - what are the missing or incomplete components?")),i.default.createElement(u.default,{alt:"Design audit of a page",src:g.default})),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"Comparative Research"},i.default.createElement("p",null,"As a small team with limited resources, it was important that we build on the work of other well constructed design system efforts. In conducting research, I prioritized libraries that shared some commonalities with New Engen's product and user base."),i.default.createElement("ul",null,i.default.createElement("li",null,"Enterprise, B2B, SAAS products"),i.default.createElement("li",null,"Marketing or marketing adjacent")),i.default.createElement(u.default,{alt:"Design System Logos",src:c.default}),i.default.createElement("p",null,"This research helped us to identify concepts that we would need to include in the system, design patterns that were important to enterprise marketing users, and organizational heirarchies that we could use to structure our work.")),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"Tooling Analysis"},i.default.createElement("p",null,"During the initial phases of this project, I also decided to analyze how we were using design tools and whether our current set of tools could meet our needs effectively. Specifically, the things I was focused on were:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Cost"),i.default.createElement("li",null,"Ease of collaboration"),i.default.createElement("li",null,"Industry trends")),i.default.createElement(u.default,{alt:"Tooling Logos",src:m.default}),i.default.createElement("p",null,"I researched Abstract for Sketch, Invision's Design System Manager and Figma for potential solutions. Ultimately, based on these criteria, I made a recommendation and we decided to migrate to Figma.")),i.default.createElement(s.SubSection,{title:"Design Priciple Synthesis"},i.default.createElement("p",null,"The ultimate goal of the research phase of this project was to synthesize a small number of design priciples that we could use to guide our work through implementation. Through discussing research findings with other designers, engineers, and product stakeholders, we were able to come up with three rules to live by."),i.default.createElement("h4",null,"Build only what we need"),i.default.createElement("p",null,"As a small product team, we wanted our main focus to be on building features. The design system would be augmented and iterated on only as product needs required. Additionally, we learned that speculative designing for theoritical future use cases often resulted in unused work or work that made bad assumptions. By building only what we need, when we need it, we could avoid this wasted effort."),i.default.createElement("h4",null,"Make color matter"),i.default.createElement("p",null,'Our users are trying to do their job and have complex workflows. Our visual design should work to simplify those workflows and not distract. Therefore, color and other "loud" visual design is only used when it has an explicit purpose.'),i.default.createElement("h4",null,"Accessibile design"),i.default.createElement("p",null,"In much of our original design system, accessibility was an afterthought. This manifested in ways that impacted all users (insufficient color contrast, small font sizes, etc). It was important to our entire product team that our product not exclude potential users with permanent, temporary, or situational impairments.")))};t.default=p,e.exports=t.default},204:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=l(a),s=n(2),o=l(s),r=n(4),u=l(r),d=n(476),c=l(d),f=n(518),m=l(f),h=n(475),g=l(h),p=n(506),E=l(p),w=n(519),y=l(w),b=n(507),S=l(b),k=function(){return i.default.createElement(o.default,{shade:3,title:"The System"},i.default.createElement(s.SubSection,{title:"Aritfacts"},i.default.createElement("p",null,"Based on some of the work in Brad Frost's"," ",i.default.createElement("a",{href:"https://bradfrost.com/blog/post/atomic-web-design/",target:"_blank"},"Atomic Design"),", I decided we would structure our design system into Styles, Components and Patterns which closely mirrors atoms, molecules and organisms in his book."),i.default.createElement("p",null,"This organizational structure would then be consistently applied to the following deliverables:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Shared Figma library used by the UX team to create high fidelity designs"),i.default.createElement("li",null,"Centralized documentation that would act as a single source of truth for design and engineering"),i.default.createElement("li",null,"Front end library in Storybook")),i.default.createElement("p",null,"What follows is a sampling of each of these concepts in the new New Engen Design System.")),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"Styles"},i.default.createElement(u.default,{alt:"Spacing in the Design System",src:m.default}),i.default.createElement(u.default,{alt:"Colors in the Design System",src:c.default})),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"Components"},i.default.createElement(u.default,{alt:"Buttons in the Design System",src:g.default}),i.default.createElement(u.default,{alt:"Modals in the Design System",src:E.default})),i.default.createElement("hr",null),i.default.createElement(s.SubSection,{title:"Patterns"},i.default.createElement(u.default,{alt:"Tables in the Design System",src:y.default}),i.default.createElement(u.default,{alt:"Navigation in the Design System",src:S.default})))};t.default=k,e.exports=t.default},475:function(e,t,n){e.exports=n.p+"static/Buttons.ebfd8410.jpg"},476:function(e,t,n){e.exports=n.p+"static/Color.3a628b80.jpg"},506:function(e,t,n){e.exports=n.p+"static/Modals.23c17888.jpg"},49:function(e,t,n){e.exports=n.p+"static/NEDesignSystemHero.a85e83ac.jpg"},507:function(e,t,n){e.exports=n.p+"static/Navigation.674001f6.jpg"},518:function(e,t,n){e.exports=n.p+"static/Spacing.83cde93a.jpg"},519:function(e,t,n){e.exports=n.p+"static/Tables.7c34a90d.jpg"},521:function(e,t,n){e.exports=n.p+"static/audit.17e7f0e2.jpg"},523:function(e,t,n){e.exports=n.p+"static/designsystemteam.c7f4fec1.png"},524:function(e,t,n){e.exports=n.p+"static/dslogos.631e9267.png"},52:function(e,t,n){e.exports=n.p+"static/hazel.2f1edff7.jpg"},577:function(e,t,n){e.exports=n.p+"static/slackcomms.a46e03f6.png"},589:function(e,t,n){e.exports=n.p+"static/toollogos.2a699aee.png"},241:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=l(a),s=n(15),o=l(s),r=n(6),u=l(r),d=n(49),c=l(d),f=n(52),m=l(f),h=n(17),g=l(h),p=n(2),E=l(p),w=n(7),y=l(w),b=n(203),S=l(b),k=n(202),v=l(k),x=n(204),I=l(x),D=n(201),_=l(D),T=function(){return i.default.createElement(a.Fragment,null,i.default.createElement(o.default,{title:"New Engen Design System | matt harris"}),i.default.createElement(u.default,{title:"New Engen Design System",image:c.default,imageAlt:"New Engen Design System"},i.default.createElement("p",null,"The Design System for SAAS Marketing Company, New Engen")),i.default.createElement(g.default,{company:i.default.createElement("a",{href:"https://newengen.com",target:"_blank"},"New Engen"),tools:"Sketch to Figma",deliverables:"Figma Design System, Storybook",role:"Design Lead",impact:"Over this ongoing project, I led the design, development, implementation, and support of a design system in collaboration with two other product designers and four engineers.",problem:"The existing New Engen design system wasn't consistently applied or used by either designers or developers, which resulted in a disjointed design across the product and lost time on our product and engineering teams.",goal:"Operationalize a new design system that fits our company's mission to create a consistent user experience and save our teams time and money."},i.default.createElement(E.default,null,i.default.createElement(p.SubSection,{title:"Background"},i.default.createElement("p",null,"At the beginning of 2019, New Engen had a design system that was failing our product and engineering teams. The design system as it stood had a number of issues:"),i.default.createElement("ul",null,i.default.createElement("li",null,"Design system was siloed in a designer-owned Sketch file"),i.default.createElement("li",null,"No centralized implementation existed in the web front end"),i.default.createElement("li",null,"Patterns and components weren't being reused on either the design or development side"),i.default.createElement("li",null,"No process to add or audit the design system existed"),i.default.createElement("li",null,'No "source of truth" led to incosistent application of standards'))),i.default.createElement("hr",null),i.default.createElement(p.SubSection,{title:"Solution Overview"},i.default.createElement("p",null,"The scope of the challenges that existed in the existing design system made it clear that an iterative approach wouldn't be sufficient–we needed to rethink the system from the ground up."),i.default.createElement("p",null,"Recognizing this, I proposed a three part solution and aligned the team including the director of UX and VP of engineering behind it:"),i.default.createElement("ol",null,i.default.createElement("li",null,"Conduct internal and external ",i.default.createElement("strong",null,"research")," to arrive at a set of guiding principles"),i.default.createElement("li",null,"Implement a set of ",i.default.createElement("strong",null,"process improvements")," to ensure the team and the system stays in sync"),i.default.createElement("li",null,"Work collaboratively to implement a initial version of"," ",i.default.createElement("strong",null,"the system")," that we could continue to build on"))))),i.default.createElement(S.default,null),i.default.createElement(v.default,null),i.default.createElement(I.default,null),i.default.createElement(_.default,null),i.default.createElement(E.default,{shade:5},i.default.createElement("h4",null,"Keep Reading"),i.default.createElement(y.default,{link:"/hazel/",title:"Hazel Analytics",subtitle:"Web app redesign",image:m.default})))};t.default=T,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-new-engen-design-system-js-eb182fa524f0a0b58453.js.map