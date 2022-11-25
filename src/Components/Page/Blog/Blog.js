import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="py-40 h-full bg-gray-800 text-white">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-center py-5 text-2xl font-semibold sm:text-4xl">
          My
            <span class="text-blue-500 ">Blog</span>
          </h2>
          <div className="space-y-4">
            {/*  */}
            <details className="w-full border rounded-lg">
              <summary className="px-4 text-xl font-semibold py-6 focus:outline-none focus-visible:ring-violet-400">
              What are the different ways to manage a state in a React
                application?
              </summary>
              <p className="px-4 text-lg py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              “There are four main types of state you need to properly manage
                in your React apps: 1.Local state 2.Global state 3.Server state
                4.URL state,
                <br />
                1/Server state – Data that comes from an external server that
                must be integrated with our UI state. Server state is a simple
                concept, but can be hard to manage alongside all of our local
                and global UI state.
                <br />
                Global (UI) state – Global state is data we manage across
                multiple components. Global state is necessary when we want to
                get and update data anywhere in our app, or in multiple
                components at least.
                <br />
                URL state – Data that exists on our URLs, including the pathname
                and query parameters. URL state is often missing as a category
                of state, but it is an important one. In many cases, a lot of
                major parts of our application rely upon accessing URL state.
                <br />
                Local (UI) state – Local state is data we manage in one or
                another component. Local state is most often managed in React
                using the useState hook. ”.
              </p>
            </details>
            {/*  */}
            <details className="text-xl font-semibold w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              How does prototypical inheritance work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              “Every object with its methods and properties contains an
                internal and hidden property known as [[Prototype]]. The
                Prototypal Inheritance is a feature in javascript used to add
                methods and properties in objects. It is a method by which an
                object can inherit the properties and methods of another object.
                Traditionally, in order to get and set the [[Prototype]] of an
                object, we use Object.getPrototypeOf and Object.setPrototypeOf.
                Nowadays, in modern language, it is being set using __proto__.”.
              </p>
            </details>
            {/*  */}
            <details className="w-full border rounded-lg">
              <summary className="text-xl font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is a unit test? Why should we write unit tests?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              “The main objective of unit testing is to isolate written code
                to test and determine if it works as intended. Unit testing is
                an important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.”.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="text-xl font-semibold px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              React vs. Angular vs. Vue?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              “1.React:React can be used as a UI library to render elements,
                without enforcing a specific project structure, and that’s why
                it’s not strictly a framework.ex:- 1.React
                Elements,2.Components,3.JSX ,
                <br />
                2.Angula:In this article, I’m discussing Angular 2, and not the
                first version of the framework which is now known as AngularJS.
                AngularJS, the original framework, is an MVC
                (Model-View-Controller)) framework. But in Angular 2, there’s no
                strict association with MV*-patterns as it is also
                component-based. Projects in Angular are structured into
                Modules, Components, and Services. Each Angular application has
                at least one root component and one root module.
                <br />
                3.Vue:The Vue.js core library focuses on the View layer only.
                It’s called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual framework. ”.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
