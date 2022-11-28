import React from "react";

const Blog = () => {
  return (
    <div className="py-12">
      <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="relative flex items-center justify-between p-5 rounded-sm">
          <div className="pr-4">
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              What are the different ways to manage a state in a React
              application?
            </h6>
            <p className="text-sm">
              There are Four Kinds of React State to Manage.There are four main
              types of state you need to properly manage in your React apps:
              Local state Global state Server state URL state.Local (UI) state –
              Local state is data we manage in one or another component. Local
              state is most often managed in React using the useState
              hook.Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least.Server state – Data that comes from an external server that
              must be integrated with our UI state. Server state is a simple
              concept, but can be hard to manage alongside all of our local and
              global UI state.URL state – Data that exists on our URLs,
              including the pathname and query parameters. URL state is often
              missing as a category of state, but it is an important one.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="relative flex items-center justify-between p-5 rounded-sm">
          <div className="pr-4">
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              How does prototypical inheritance work?
            </h6>
            <p className="text-sm list-none">
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="relative flex items-center justify-between p-5 rounded-sm">
          <div className="pr-4">
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              What is a unit test? Why should we write unit tests?
            </h6>
            <p className="text-sm">
              Unit testing is a software development process in which the
              smallest testable parts of an application, called units, are
              individually and independently scrutinized for proper operation.
              This testing methodology is done during the development process by
              the software developers and sometimes QA staff. The main objective
              of unit testing is to isolate written code to test and determine
              if it works as intended. Unit testing is an important step in the
              development process, because if done correctly, it can help detect
              early flaws in code which may be more difficult to find in later
              testing stages.
            </p>
          </div>
        </div>
      </div>
      <div className="relative mb-8 block w-10/12 p-px mx-auto overflow-hidden transition duration-300 transform rounded-md border shadow-md hover:scale-105 group hover:shadow-xl">
        <div className="absolute bottom-0 left-0 w-full h-[2px] duration-300 origin-left transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 left-0 w-[2px] h-full duration-300 origin-bottom transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="absolute top-0 left-0 w-full h-[2px] duration-300 origin-right transform scale-x-0 bg-neutral group-hover:scale-x-100"></div>
        <div className="absolute bottom-0 right-0 w-[2px] h-full duration-300 origin-top transform scale-y-0 bg-neutral group-hover:scale-y-100"></div>
        <div className="relative flex items-center justify-between p-5 rounded-sm">
          <div className="pr-4">
            <h6 className="mb-2 font-semibold leading-5 text-lg">
              React vs. Angular vs. Vue?
            </h6>
            <p className="text-sm">
              There are three frameworks for building web applications that
              every frontend developer has heard about: React, Vue.js, and
              Angular. React is a UI library, Angular is a fully-fledged
              front-end framework, while Vue.js is a progressive framework. They
              can be used almost interchangeably to build front-end
              applications, but they’re not 100 percent the same, so it makes
              sense to compare them and understand their differences. Each
              framework is component-based and allows the rapid creation of UI
              features.React can be used as a UI library to render elements,
              without enforcing a specific project structure, and that’s why
              it’s not strictly a framework.The Vue.js core library focuses on
              the View layer only. It’s called a progressive framework because
              you can extend its functionality with official and third-party
              packages, such as Vue Router or Vuex, to turn it into an actual
              framework.In this article, I’m discussing Angular 2, and not the
              first version of the framework which is now known as AngularJS.
              AngularJS, the original framework, is an MVC
              (Model-View-Controller) framework. But in Angular 2, there’s no
              strict association with MV*-patterns as it is also
              component-based.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
