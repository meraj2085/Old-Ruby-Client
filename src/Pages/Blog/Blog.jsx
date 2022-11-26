import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-red-700">
              <h3 className="text-5xl font-bold">BLOG</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  What are the different ways to manage a state in a React
                  application?{" "}
                </h3>
                <p className="mt-3">
                  There are four main types of state that can be used to manage
                  state in your React apps. These are Local state, Global state,
                  Server state, URL state.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  How does prototypical inheritance work?
                </h3>
                <p className="mt-3">
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the Prototype
                  of an object, we use Object.getPrototypeOf and Object.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  What is a unit test? Why should we write unit tests?
                </h3>
                <p className="mt-3">
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages. They enable
                  you to catch bugs early in the development process. Automated
                  unit tests help a great deal with regression testing. They
                  detect code smells in your codebase. For example, if you're
                  having a hard time writing unit tests for a piece of code, it
                  might be a sign that your function is too complex.
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-700">
                <h3 className="text-xl font-semibold tracking-wide">
                  React vs. Angular vs. Vue?
                </h3>
                <p className="mt-3">
                  There are three frameworks for building web applications that
                  every frontend developer has heard about: React, Vue.js, and
                  Angular. React is a UI library, Angular is a fully-fledged
                  front-end framework, while Vue.js is a progressive framework.
                  They can be used almost interchangeably to build front-end
                  applications, but they're not 100 percent the same, so it
                  makes sense to compare them and understand their differences.
                  Each framework is component-based and allows the rapid
                  creation of UI features. React can be used as a UI library to
                  render elements, without enforcing a specific project
                  structure, and that's why it's not strictly a framework. The
                  Vue.js core library focuses on the View layer only. It's
                  called a progressive framework because you can extend its
                  functionality with official and third-party packages, such as
                  Vue Router or Vuex, to turn it into an actual framework. Vue's
                  templating syntax lets you create View components, and it
                  combines familiar HTML with special directives and features.
                  This templating syntax is preferred, even though raw
                  JavaScript and JSX are also supported. AngularJS, the original
                  framework, is an MVC Model-View-Controller framework. But in
                  Angular 2, there's no strict association with MV*-patterns as
                  it is also component-based. Each component in Angular contains
                  a Template, a Class that defines the application logic, and
                  MetaData (Decorators). The metadata for a component tells
                  Angular where to find the building blocks that it needs to
                  create and present its view. Angular templates are written in
                  HTML but can also include Angular template syntax with special
                  directives to output reactive data and render multiple
                  elements, among other things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
