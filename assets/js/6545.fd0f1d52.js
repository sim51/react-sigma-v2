"use strict";(self.webpackChunk_react_sigma_website=self.webpackChunk_react_sigma_website||[]).push([[6545],{2072:(e,t,o)=>{o.d(t,{SI:()=>n.g,TQ:()=>n.f,ft:()=>n.D,nc:()=>n.E});var n=o(8602),i=o(7407),a=o(7506),r=WebGLRenderingContext,s=(r.UNSIGNED_BYTE,r.FLOAT,WebGLRenderingContext),u=s.UNSIGNED_BYTE,c=s.FLOAT,_=["u_matrix","u_zoomRatio","u_sizeRatio","u_correctionRatio","u_pixelRatio","u_feather","u_minEdgeThickness","u_lengthToThicknessRatio"],f={lengthToThicknessRatio:n.D.lengthToThicknessRatio};function l(e){var t=(0,n.a)((0,n.a)({},f),e||{});return function(e){function o(){return(0,i.b)(this,o),(0,i.c)(this,o,arguments)}return(0,i._)(o,e),(0,i.a)(o,[{key:"getDefinition",value:function(){return{VERTICES:6,VERTEX_SHADER_SOURCE:"\nattribute vec4 a_id;\nattribute vec4 a_color;\nattribute vec2 a_normal;\nattribute float a_normalCoef;\nattribute vec2 a_positionStart;\nattribute vec2 a_positionEnd;\nattribute float a_positionCoef;\nattribute float a_sourceRadius;\nattribute float a_targetRadius;\nattribute float a_sourceRadiusCoef;\nattribute float a_targetRadiusCoef;\n\nuniform mat3 u_matrix;\nuniform float u_zoomRatio;\nuniform float u_sizeRatio;\nuniform float u_pixelRatio;\nuniform float u_correctionRatio;\nuniform float u_minEdgeThickness;\nuniform float u_lengthToThicknessRatio;\nuniform float u_feather;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\nvarying float v_feather;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float minThickness = u_minEdgeThickness;\n\n  vec2 normal = a_normal * a_normalCoef;\n  vec2 position = a_positionStart * (1.0 - a_positionCoef) + a_positionEnd * a_positionCoef;\n\n  float normalLength = length(normal);\n  vec2 unitNormal = normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sizeRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio / u_sizeRatio;\n\n  // Here, we move the point to leave space for the arrow heads:\n  // Source arrow head\n  float sourceRadius = a_sourceRadius * a_sourceRadiusCoef;\n  float sourceDirection = sign(sourceRadius);\n  float webGLSourceRadius = sourceDirection * sourceRadius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLSourceArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  vec2 sourceCompensationVector =\n    vec2(-sourceDirection * unitNormal.y, sourceDirection * unitNormal.x)\n    * (webGLSourceRadius + webGLSourceArrowHeadLength);\n    \n  // Target arrow head\n  float targetRadius = a_targetRadius * a_targetRadiusCoef;\n  float targetDirection = sign(targetRadius);\n  float webGLTargetRadius = targetDirection * targetRadius * 2.0 * u_correctionRatio / u_sizeRatio;\n  float webGLTargetArrowHeadLength = webGLThickness * u_lengthToThicknessRatio * 2.0;\n  vec2 targetCompensationVector =\n  vec2(-targetDirection * unitNormal.y, targetDirection * unitNormal.x)\n    * (webGLTargetRadius + webGLTargetArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(position + unitNormal * webGLThickness + sourceCompensationVector + targetCompensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_zoomRatio;\n\n  v_normal = unitNormal;\n\n  v_feather = u_feather * u_correctionRatio / u_zoomRatio / u_pixelRatio * 2.0;\n\n  #ifdef PICKING_MODE\n  // For picking mode, we use the ID as the color:\n  v_color = a_id;\n  #else\n  // For normal mode, we use the color:\n  v_color = a_color;\n  #endif\n\n  v_color.a *= bias;\n}\n",FRAGMENT_SHADER_SOURCE:n.F,METHOD:WebGLRenderingContext.TRIANGLES,UNIFORMS:_,ATTRIBUTES:[{name:"a_positionStart",size:2,type:c},{name:"a_positionEnd",size:2,type:c},{name:"a_normal",size:2,type:c},{name:"a_color",size:4,type:u,normalized:!0},{name:"a_id",size:4,type:u,normalized:!0},{name:"a_sourceRadius",size:1,type:c},{name:"a_targetRadius",size:1,type:c}],CONSTANT_ATTRIBUTES:[{name:"a_positionCoef",size:1,type:c},{name:"a_normalCoef",size:1,type:c},{name:"a_sourceRadiusCoef",size:1,type:c},{name:"a_targetRadiusCoef",size:1,type:c}],CONSTANT_DATA:[[0,1,-1,0],[0,-1,1,0],[1,1,0,1],[1,1,0,1],[0,-1,1,0],[1,-1,0,-1]]}}},{key:"processVisibleItem",value:function(e,t,o,n,i){var r=i.size||1,s=o.x,u=o.y,c=n.x,_=n.y,f=(0,a.f)(i.color),l=c-s,m=_-u,R=o.size||1,h=n.size||1,g=l*l+m*m,T=0,d=0;g&&(T=-m*(g=1/Math.sqrt(g))*r,d=l*g*r);var p=this.array;p[t++]=s,p[t++]=u,p[t++]=c,p[t++]=_,p[t++]=T,p[t++]=d,p[t++]=f,p[t++]=e,p[t++]=R,p[t++]=h}},{key:"setUniforms",value:function(e,o){var n=o.gl,i=o.uniformLocations,a=i.u_matrix,r=i.u_zoomRatio,s=i.u_feather,u=i.u_pixelRatio,c=i.u_correctionRatio,_=i.u_sizeRatio,f=i.u_minEdgeThickness,l=i.u_lengthToThicknessRatio;n.uniformMatrix3fv(a,!1,e.matrix),n.uniform1f(r,e.zoomRatio),n.uniform1f(_,e.sizeRatio),n.uniform1f(c,e.correctionRatio),n.uniform1f(u,e.pixelRatio),n.uniform1f(s,e.antiAliasingFeather),n.uniform1f(f,e.minEdgeThickness),n.uniform1f(l,t.lengthToThicknessRatio)}}]),o}(n.g)}l();(0,n.h)([l(m),(0,n.i)(m),(0,n.i)((0,n.a)((0,n.a)({},m),{},{extremity:"source"}))]);var m,R=WebGLRenderingContext,h=(R.UNSIGNED_BYTE,R.FLOAT,WebGLRenderingContext);h.UNSIGNED_BYTE,h.FLOAT},5662:(e,t,o)=>{o.d(t,{Ko:()=>i.f,fB:()=>n.h});var n=o(7291),i=o(7506);o(181)}}]);