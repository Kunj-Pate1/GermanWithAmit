// src/data/blogData.ts
export interface BlogPost {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image?: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string | { table?: { headers: string[]; rows: string[][] } };
      tips?: string[];
    }[];
    conclusion: string;
    callToAction: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "german-alphabets",
    title: "German Alphabets with Pronunciation in English & Hindi – A Fun Beginner's Guide",
    metaTitle: "Learn German Alphabets Easily with Hindi & English Pronunciation",
    metaDescription: "New to German? Learn all 26 German alphabets + special letters with correct pronunciation in English & Hindi. Simple, fun, and perfect for A1 beginners.",
    date: "June 15, 2024",
    readTime: "8 min read",
    author: "Amit Sharma",
    category: "Learning Tips",
    image: "/images/german-alphabet.jpg",
    content: {
      introduction: "Hallo! Ready to learn the German alphabet the fun way? If you're just starting your German journey, the alphabet (das Alphabet) is your first stop—and don't worry, it's easier than you think! At GermanWithAmit, we believe in keeping things simple, interactive, and beginner-friendly. In this post, I'll walk you through all 26 German letters, how to pronounce them (with English & Hindi examples), special German letters like Ä, Ö, Ü, ß, and quick memory tips to make them stick!",
      sections: [
        {
          title: "The German Alphabet (with English & Hindi Pronunciation)",
          content: {
            table: {
              headers: ["Letter", "Pronounced As", "Think of...", "Hindi Sound"],
              rows: [
                ["A", "Ah", "Like 'Car'", "आ"],
                ["B", "Bay", "Like 'Bay'", "बे"],
                ["C", "Tsay", "Like 'Say' with a T", "से"],
                ["D", "Day", "Like 'Day'", "डे"],
                ["E", "Ay", "Like 'Play'", "ए"],
                ["F", "Eff", "Just 'F'", "एफ"],
                ["G", "Gay", "Like 'Gate'", "गे"],
                ["H", "Hah", "Like 'Ha'", "हा"],
                ["I", "Ee", "Like 'Machine'", "ई"],
                ["J", "Yot", "Sounds like 'Y'", "यॉट"],
                ["K", "Kah", "Like 'Car'", "का"],
                ["L", "El", "Just 'L'", "एल"],
                ["M", "Em", "Just 'M'", "एम"],
                ["N", "En", "Just 'N'", "एन"],
                ["O", "Oh", "Like 'Go'", "ओ"],
                ["P", "Pay", "Like 'Pay'", "पे"],
                ["Q", "Ku", "Like 'Cool'", "कू"],
                ["R", "Err (rolled R)", "Like Spanish 'R'", "अ‍र्र"],
                ["S", "Ess", "Just 'S'", "एस"],
                ["T", "Tay", "Like 'Table'", "टे"],
                ["U", "Oo", "Like 'Zoo'", "ऊ"],
                ["V", "Fow", "Pronounced like F, not V", "फ"],
                ["W", "Vay", "Pronounced like V, not W", "वे"],
                ["X", "Iks", "Like 'Fix'", "इक्‍स"],
                ["Y", "Üpsilon", "Like 'Ü' + 'son'", "युप्सिलोन"],
                ["Z", "Tsett", "Like 'Pizza' (ts sound)", "त्सेट"]
              ]
            }
          },
          tips: [
            "🧠 Quick Check: How would you spell your name in German? Try it aloud using the pronunciations above!"
          ]
        },
        {
          title: "What About These Strange Letters – Ä, Ö, Ü, ß?",
          content: {
            table: {
              headers: ["Letter", "Sounds Like", "Hindi Sound", "Example"],
              rows: [
                ["Ä", "Like 'Air'", "ऐ", "Mädchen (girl)"],
                ["Ö", "Like 'Ur' in 'Burn'", "ओ/अउ mix", "Österreich (Austria)"],
                ["Ü", "Say 'ee' with tight lips", "यू (rounded)", "Frühstück (breakfast)"],
                ["ß", "Like a double 'S'", "स्स", "Straße (street)"]
              ]
            }
          },
          tips: [
            "💬 Student Tip: Think of 'Ü' like saying 'ई' while blowing a kiss. Try it – lips rounded, but say 'ee'! 😄"
          ]
        },
        {
          title: "Pro Tips to Master the German Alphabet",
          content: "Here are my top tips (and secrets from class):",
          tips: [
            "✅ Practice spelling names: Spell your own name, cities, or favorite brand in German. Example: AMIT → Ah – Em – Ee – Tay",
            "✅ Use Hindi as your bridge: Hindi speakers have a huge advantage because German sounds are closer to Hindi than English in many cases.",
            "✅ Record Yourself: Say the alphabet and listen back. You'll catch small errors easily.",
            "✅ Watch Cartoons or Songs for Kids: German children's content is GOLD for beginners. Try Sesamstraße or Sing mit mir on YouTube.",
            "✅ Repeat daily – 5 minutes a day: Make it part of your morning routine. You'll be surprised how fast you remember!"
          ]
        }
      ],
      conclusion: "Learning the German alphabet is your first confident step into the language. If you can read, say, and spell using these letters, you're already ahead of most beginners. At GermanWithAmit, I help learners like you go from 'Where do I even start?' to confidently saying: 'Ich kann Deutsch sprechen!'",
      callToAction: "📌 What Next?\n\n✅ Watch my YouTube video on German Alphabets – Real sounds, real practice. Click here to watch\n✅ Download our free alphabet pronunciation guide (PDF)\n✅ Join our A1 Beginner's WhatsApp group for daily practice"
    }
  },
  {
    id: "german-grammar",
    title: "10 Effective Strategies to Master German Grammar",
    metaTitle: "Master German Grammar with These Proven Techniques",
    metaDescription: "Discover proven techniques to tackle German grammar with confidence and make your learning journey smoother.",
    date: "June 10, 2024",
    readTime: "10 min read",
    author: "Anna Müller",
    category: "Learning Tips",
    image: "/images/german-grammar.jpg",
    content: {
      introduction: "German grammar can seem intimidating at first, but with the right approach, you can master it efficiently. In this guide, I'll share 10 strategies that have helped thousands of students conquer German grammar.",
      sections: [
        // ... other sections would follow the same pattern
      ],
      conclusion: "German grammar becomes manageable when you break it down into smaller chunks and practice regularly.",
      callToAction: "Want more grammar tips? Download our free German Grammar Cheat Sheet!"
    }
  }
  // You can add more blog posts following the same structure
];