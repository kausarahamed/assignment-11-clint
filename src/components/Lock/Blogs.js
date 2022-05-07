import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
        Blogs
      </div>
      <div className="pt-10 grid md:grid-cols-3 gap-5 py10">
        <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[500px]">
          <h1 className="text-2xl font-semibold">
            1. Difference between javascript and node js?
          </h1>
          <p className="pt-3 text-xl p-2">
            Javascript could be a programming dialect that's utilized for
            composing scripts on the site.But node js could be a javascript
            runtime environment.Javascript can as it were be run within the
            browsers.Beside it is for the most part utilized on the
            server-side.Javascript is competent sufficient to include html and
            play with the dom.But nodejs does not have capability to include
            html labels.
          </p>
        </div>
        <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[500px]">
          <h1 className="text-2xl font-semibold">
            2. When should you use nodejs and when should you use mongodb
          </h1>
          <p className="pt-3 text-xl p-2">
            Mongodb use for storing data.Mongodb give us api to run our
            website.MongoDB is one of the popular database.Any extend needs a
            programming environment and a runtime library that provides you
            fundamental programming tools and can compile and decipher your
            code. Nodejs is such as a device for the Javascript programming
            dialect.
          </p>
        </div>
        <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[500px]">
          <h1 className="text-2xl font-semibold">
            3. What is the purpose of jwt and how does it work
          </h1>
          <p className="pt-3 text-xl p-2">
            Json Web Token may be a standard utilized to form get to tokens for
            an application.The server produces a token that certifies the client
            character and sends it to the client.The client will send the token
            back to the server for each ensuing ask so the server knows the ask
            comes from a specific character. JWT provide very strong
            secruity.Google api also use JWT.
          </p>
        </div>
        <div className="mx-5 mb-10 bg-gray-200 rounded-xl  relative shadow-xl h-[500px]">
          <h1 className="text-2xl font-semibold">
            4. Differences between sql and nosql databases.
          </h1>
          <p className="pt-3 text-xl p-2">
            There are many difference between sql and nosql databases.Main
            difference in support, structure, scalability, language.These
            databases are not suited for various leveled information capacities.
            In sql These databases are not suited for various leveled
            information capacities. but nosql databases are best suited for
            various leveled information capacity. In sql databases are best
            suited for complex questions but nosql databases are not so great
            for complex questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
