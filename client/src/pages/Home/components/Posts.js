import React from "react";
import BlogPost from "../../../components/Blog/Blog";
import "./Posts.css";

export default function Posts() {
  const data = [
    {
      Title: "Divergent",
      Author: "Veronica Roth",
      Description:
        "In Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent). On an appointed day of every year, all sixteen-year-olds must select the faction to which they will devote the rest of their lives. For Beatrice, the decision is between staying with her family and being who she really is—she can't have both. So she makes a choice that surprises everyone, including herself.",
      Image: "Images/1.jpg",
    },
    {
      Title: "The Immortals of Meluha",
      Author: "Amish Tripathi",
      Description:
        "The Immortals of Meluha is the first book of Amish Tripathi, first book of Amishverse, and also the first book of Shiva Trilogy. The story is set in the land of Meluha and starts with the arrival of the Shiva. The Meluhans believe that Shiva is their fabled saviour Neelkanth. Shiva decides to help the Meluhans in their war against the Chandravanshis, who had joined forces with a cursed Nagas; however, during his journey and the fight that ensues, Shiva learns how his choices actually reflect who he aspires to be and how they lead to dire consequences.",
      Image: "Images/2.jpg",
    },
    {
      Title: "Harry Potter",
      Author: "J.K Rowling",
      Description:
        "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
      Image: "Images/3.jpg",
    },
    {
      Title: "Alexandar the great",
      Author: "Philip Freeman",
      Description:
        "The celebrated Macedonian king has been one of the most enduring figures in history. He was a general of such skill and renown that for two thousand years other great leaders studied his strategy and tactics, from Hannibal to Napoleon, with countless more in between. He flashed across the sky of history like a comet, glowing brightly and burning out quickly: crowned at age nineteen, dead by thirty-two. He established the greatest empire of the ancient world; Greek coins and statues are found as far east as Afghanistan. Our interest in him has never faded.",
      Image: "Images/4.jpg",
    },
    {
      Title: "The Da Vinci Code",
      Author: "Dan Brown",
      Description:
        "The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.",
      Image: "Images/5.jpg",
    },
    {
        Title: "The Alchemist",
        Author: "Paulo Coelho",
        Description:
          "The Alchemist presents a simple fable, based on simple truths and places it in a highly unique situation. And though we may sniff a bestselling formula, it is certainly not a new one: even the ancient tribal storytellers knew that this is the most successful method of entertaining an audience while slipping in a lesson or two. Brazilian storyteller Paulo Coehlo introduces Santiago, an Andalusian shepherd boy who one night dreams of a distant treasure in the Egyptian pyramids. And so he's off: leaving Spain to literally follow his dream.",
        Image: "Images/6.jpg",
      },
  ];
  return (
    <div className="posts">
      {data.map((book) => {
        return (
          <div className="posts-cont" key={book.id}>
            <div className="posts-cont--in">
              <BlogPost title={book.Title} author={book.Author} description={book.Description} image={book.Image} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
