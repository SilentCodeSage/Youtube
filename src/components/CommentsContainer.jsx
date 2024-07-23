import React from "react";
import Comments from "./Comments";

const comments = [
    {
      name: "John Doe",
      text: "This is a great article!",
      replies: [
        {
          name: "Jane Smith",
          text: "I completely agree with you, John.",
          replies: [
            {
              name: "Emily Johnson",
              text: "Me too! The insights are really valuable.",
              replies: [
                {
                  name: "Michael Brown",
                  text: "I'm glad everyone found it useful.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Alice Green",
      text: "Can someone explain point 3 in more detail?",
      replies: [
        {
          name: "Bob White",
          text: "Sure, Alice. Point 3 refers to the impact of climate change on biodiversity.",
          replies: [
            {
              name: "Charlie Black",
              text: "I think Bob is right, and we should also consider the economic implications.",
            },
          ],
        },
      ],
    },
    {
      name: "David Blue",
      text: "This was an eye-opening read.",
      replies: [
        {
          name: "Eva Grey",
          text: "Absolutely, David. The statistics were particularly shocking.",
        },
        {
          name: "Frank Yellow",
          text: "I found the historical context very informative.",
        },
      ],
    },
    {
      name: "Grace Pink",
      text: "Does anyone have any sources for further reading?",
      replies: [
        {
          name: "Hank Red",
          text: "Yes, Grace. Check out the references section at the end.",
          replies: [
            {
              name: "Ivy Orange",
              text: "There's also a list of recommended books in the appendix.",
            },
          ],
        },
      ],
    },
    {
      name: "Jack Violet",
      text: "I disagree with some points made here.",
      replies: [
        {
          name: "Kara Cyan",
          text: "That's fair, Jack. What specifically do you disagree with?",
          replies: [
            {
              name: "Liam Magenta",
              text: "I'd like to hear more about your perspective too, Jack.",
            },
          ],
        },
      ],
    },
    {
      name: "Mia Indigo",
      text: "Fantastic summary of the current trends!",
      replies: [
        {
          name: "Nate Teal",
          text: "Thanks, Mia. It's great to see the data laid out so clearly.",
        },
      ],
    },
    {
      name: "Oliver Azure",
      text: "What are the implications of these findings?",
      replies: [
        {
          name: "Penny Lavender",
          text: "Good question, Oliver. The implications are quite significant for policy-making.",
          replies: [
            {
              name: "Quinn Olive",
              text: "I think it also affects how we approach sustainability.",
              replies: [
                {
                  name: "Ryan Peach",
                  text: "Yes, especially in terms of resource management.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sophie Lilac",
      text: "How can we apply these insights to everyday life?",
      replies: [
        {
          name: "Tom Amber",
          text: "There are several practical steps mentioned in the conclusion.",
        },
        {
          name: "Uma Coral",
          text: "I think raising awareness is the first step.",
        },
      ],
    },
    {
      name: "Victor Mint",
      text: "Can we get an expert opinion on this?",
      replies: [
        {
          name: "Wendy Sage",
          text: "An expert panel discussed this last month, and their findings are in the report.",
        },
      ],
    },
    {
      name: "Xander Bronze",
      text: "Is this applicable globally or just regionally?",
      replies: [
        {
          name: "Yara Silver",
          text: "Most of the points are globally relevant, Xander.",
          replies: [
            {
              name: "Zane Gold",
              text: "Yes, but some regional specifics are highlighted too.",
            },
          ],
        },
      ],
    },
    {
      name: "Amy Plum",
      text: "Any plans for a follow-up study?",
      replies: [
        {
          name: "Brian Ruby",
          text: "The authors mentioned a follow-up in the next quarter.",
        },
      ],
    },
  ];
  

const CommentsContainer = () => {
  return (
    <div className="w-8/12">
      <div>
        <h1 className="font-bold text-2xl px-5 pl-32 pt-5">Comments:</h1>
      </div>
      {
        //change the key
        comments.map((data, index) => {
          return <Comments key={index} data={data} />;
        })
      }
    </div>
  );
};

export default CommentsContainer;
