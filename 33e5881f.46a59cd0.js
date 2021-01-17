(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(88)),i={id:"form-object",title:"FormObject",sidebar_label:"FormObject"},b={unversionedId:"form-object",id:"form-object",isDocsHomePage:!1,title:"FormObject",description:"This comes from the doc-test repo",source:"@site/docs/form-object.md",slug:"/form-object",permalink:"/docusaurus-test/docs/form-object",editUrl:"https://github.com/infinum/ngx-form-object/docs/form-object.md",version:"current",sidebar_label:"FormObject",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/docusaurus-test/docs/"}},l=[{value:"Defining relationship form fields",id:"defining-relationship-form-fields",children:[{value:"Create relationship form fields using create{FieldName}FormObject method",id:"create-relationship-form-fields-using-createfieldnameformobject-method",children:[]}]},{value:"Defining relationship validators",id:"defining-relationship-validators",children:[]},{value:"Defining FormObject validator with <code>FormGroupOptions</code>",id:"defining-formobject-validator-with-formgroupoptions",children:[]},{value:"Saving forms",id:"saving-forms",children:[{value:"Service mapping",id:"service-mapping",children:[]},{value:"Save hooks",id:"save-hooks",children:[]}]}],c={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This comes from the doc-test repo\nFormObject lets you specify the way in which its FormStore relationship controls will be created.\nIt also enables you define specific 'save' behaviour by implementing 'beforeSave' and 'afterSave' hooks."),Object(r.b)("h2",{id:"defining-relationship-form-fields"},"Defining relationship form fields"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FormObjectBuilder")," has a default behaviour for every type of form field relationship:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Attribute")," form field - ",Object(r.b)("inlineCode",{parentName:"li"},"ExtendedFormControl")," will be created by default"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"BelongsTo")," form field - ",Object(r.b)("inlineCode",{parentName:"li"},"ExtendedFormControl")," will be created by default"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HasMany")," form field - An empty ",Object(r.b)("inlineCode",{parentName:"li"},"ExtendedFormArray")," will be created")),Object(r.b)("p",null,"If default form fields don't provide you with enough control (e.g. you are manipulating multiple levels of relationships on the same page/form), default behaviour can be overriden by implementing one of the following methods:"),Object(r.b)("h3",{id:"create-relationship-form-fields-using-createfieldnameformobject-method"},"Create relationship form fields using create{FieldName}FormObject method"),Object(r.b)("p",null,"If defined, this method will be used when creating a form field for any model relationship decorated with ",Object(r.b)("inlineCode",{parentName:"p"},"BelongsTo")," or ",Object(r.b)("inlineCode",{parentName:"p"},"HasMany"),".\nThis method must have a name formatted like ",Object(r.b)("inlineCode",{parentName:"p"},"create{propertyName}FormObject")," and return a ",Object(r.b)("inlineCode",{parentName:"p"},"FormObject"),". It receives model and form object options as its arguments."),Object(r.b)("p",null,"For example you can define the following method for a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," model that has a ",Object(r.b)("inlineCode",{parentName:"p"},"cars")," ",Object(r.b)("inlineCode",{parentName:"p"},"HasMany")," relationship:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'}),"public createCarsFormObject(model: Car, options: FormObjectOptions): CarFormObject {\n  return new CarFormObject(model, options);\n}\n")),Object(r.b)("p",null,"This will result in ",Object(r.b)("inlineCode",{parentName:"p"},"userForm.controls.cars")," being an ",Object(r.b)("inlineCode",{parentName:"p"},"ExtendedFormArray")," populated with ",Object(r.b)("inlineCode",{parentName:"p"},"FormStores"),". These ",Object(r.b)("inlineCode",{parentName:"p"},"FormStores")," will be created out of ",Object(r.b)("inlineCode",{parentName:"p"},"CarFormObjects")," that the ",Object(r.b)("inlineCode",{parentName:"p"},"createCarsFormObject")," method returned."),Object(r.b)("p",null,"A similar method can be defined for ",Object(r.b)("inlineCode",{parentName:"p"},"BelongsTo")," relationships. You can define the following method for a ",Object(r.b)("inlineCode",{parentName:"p"},"User")," model that has a ",Object(r.b)("inlineCode",{parentName:"p"},"Department")," ",Object(r.b)("inlineCode",{parentName:"p"},"BelongsTo")," relationship: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'}),"public createDepartmentFormObject(model: Department, options: FormObjectOptions): CarFormObject {\n  return new DepartmentFormObject(model, options);\n}\n")),Object(r.b)("p",null,"This results in ",Object(r.b)("inlineCode",{parentName:"p"},"userForm.controls.department")," being a ",Object(r.b)("inlineCode",{parentName:"p"},"FormStore")," created out of the ",Object(r.b)("inlineCode",{parentName:"p"},"CarFormObject")," instead of it being the default ",Object(r.b)("inlineCode",{parentName:"p"},"ExtendedFormControl"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"create<FieldName>FormObject")," methods don't have to return specific ",Object(r.b)("inlineCode",{parentName:"p"},"FormObjects")," (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"CarFormObject"),"). They can return the more generic ",Object(r.b)("inlineCode",{parentName:"p"},"FormObject")," if that is the level of control you need."))),Object(r.b)("h2",{id:"defining-relationship-validators"},"Defining relationship validators"),Object(r.b)("p",null,"You can add relationship validators by defining a ",Object(r.b)("inlineCode",{parentName:"p"},"validators")," object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'}),"import { Validators } from '@angular/forms';\n...\n\nvalidators: {\n  name: Validators.required, // User must have a name\n  cars: (carsControl: AbstractControl) => {\n    return carsControl.value?.length >= 1 : null : { error: 'User must have at least 2 cars' };\n  },\n}\n...\n")),Object(r.b)("p",null,"These validators will be passed to the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},"name")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cars")," relationship form controls."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Validator object will be used only for ",Object(r.b)("inlineCode",{parentName:"p"},"Attribute")," and ",Object(r.b)("inlineCode",{parentName:"p"},"HasMany")," relationships. For validating ",Object(r.b)("inlineCode",{parentName:"p"},"BelongsTo")," relationships, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#defining-formobject-validator-with-formgroupoptions"}),"FormGroupOptions"),"."))),Object(r.b)("h2",{id:"defining-formobject-validator-with-formgroupoptions"},"Defining FormObject validator with ",Object(r.b)("inlineCode",{parentName:"h2"},"FormGroupOptions")),Object(r.b)("p",null,"You can add ",Object(r.b)("inlineCode",{parentName:"p"},"FormObject")," validators by defining ",Object(r.b)("inlineCode",{parentName:"p"},"formGroupOptions")," on your ",Object(r.b)("inlineCode",{parentName:"p"},"FormObject"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="interface FormGroupOptions"',title:'"interface','FormGroupOptions"':!0}),"export interface FormGroupOptions {\n  validator?: ValidatorFn;\n  asyncValidator?: AsyncValidatorFn;\n}\n")),Object(r.b)("p",null,"For example the following validator will be set on the ",Object(r.b)("inlineCode",{parentName:"p"},"UserFormStore"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'}),"   validator: (userForm: UserFormStore) => {\n     // Validate your user form here\n    },\n")),Object(r.b)("h2",{id:"saving-forms"},"Saving forms"),Object(r.b)("p",null,"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"ngx-form-object")," to save or persist your form value. By calling ",Object(r.b)("inlineCode",{parentName:"p"},"userForm.save()"),", the corresponding service's ",Object(r.b)("inlineCode",{parentName:"p"},"save")," method will automatically be invoked."),Object(r.b)("h3",{id:"service-mapping"},"Service mapping"),Object(r.b)("p",null,"Before invoking ",Object(r.b)("inlineCode",{parentName:"p"},"userForm.save()")," you need to specify which service should be used for this purpose. You can do that by specifying the ",Object(r.b)("inlineCode",{parentName:"p"},"serviceMappings")," object in ",Object(r.b)("inlineCode",{parentName:"p"},"FormObject"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.form-object"',title:'"user.form-object"'}),"export class UserFormObject extends FormObject {\n   constructor(\n    public model: User,\n    protected options: FormObjectOptions,\n    private injector: Injector,\n  ) {\n    super(model, options);\n    this.serviceMappings = {\n      User: injector.get(UserService),\n    };\n  }\n}\n")),Object(r.b)("p",null,"The method in your service that ",Object(r.b)("inlineCode",{parentName:"p"},"FormObject")," will use must be named ",Object(r.b)("inlineCode",{parentName:"p"},"save"),", must accept the saving model and must return an Observable of the saved model. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.service.ts"',title:'"user.service.ts"'}),"public save(model: User): Observable<User> {\n  // Persist your model here\n}\n")),Object(r.b)("h3",{id:"save-hooks"},"Save hooks"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ngx-form-object")," provides two hooks that you can utilize to add functionality to your form save. These two hooks are ",Object(r.b)("inlineCode",{parentName:"p"},"beforeSave")," and ",Object(r.b)("inlineCode",{parentName:"p"},"afterSave"),", and they will be executed immediately before and after ",Object(r.b)("inlineCode",{parentName:"p"},"service.save()")," is called."),Object(r.b)("h4",{id:"beforesave"},"beforeSave"),Object(r.b)("p",null,"Implement this method to execute any action before ",Object(r.b)("inlineCode",{parentName:"p"},"service.save()")," is called. This method accepts ",Object(r.b)("inlineCode",{parentName:"p"},"FormStore")," as an argument and should return an observable of the same ",Object(r.b)("inlineCode",{parentName:"p"},"FormStore"),"."),Object(r.b)("p",null,"One example how you could use this hook is to save model relationships before ",Object(r.b)("inlineCode",{parentName:"p"},"service.save()")," is called.\nFor example, if you set ",Object(r.b)("inlineCode",{parentName:"p"},"userForm.value.department")," to a new department that does not yet exist in your database, then you  might want to save it before saving the ",Object(r.b)("inlineCode",{parentName:"p"},"User")," model. You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"beforeSave")," hook to achieve this."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="user.form-object.ts"',title:'"user.form-object.ts"'}),"beforeSave(userForm: UserFormStore): Observable<UserFormStore> {\n  return userForm.get('department').save().pipe(\n    map((departmentForm: DepartmentFormStore) => {\n      return userForm;\n    })\n  );\n}\n")),Object(r.b)("h4",{id:"aftersave"},"afterSave"),Object(r.b)("p",null,"Similarly to ",Object(r.b)("inlineCode",{parentName:"p"},"beforeSave"),", you can use this hook to execute any action after ",Object(r.b)("inlineCode",{parentName:"p"},"service.save()")," has returned."),Object(r.b)("p",null,"This method also accepts ",Object(r.b)("inlineCode",{parentName:"p"},"FormStore")," as an argument and should return an observable of the same ",Object(r.b)("inlineCode",{parentName:"p"},"FormStore"),"."))}s.isMDXComponent=!0}}]);