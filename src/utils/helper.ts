type GreetingText = "Good Morning!" | "Good Afternoon!" | "Good Evening!" | "Good Night!";

type GreetingResult = {
  greeting: GreetingText;
  emoji: string;
};

export const getGreeting = (): GreetingResult => {
    const now = new Date();
    const hour = now.getHours();
  
    if (hour >= 5 && hour < 12) {
      return { greeting: "Good Morning!", emoji: "☀️" };
    } else if (hour >= 12 && hour < 17) {
      return { greeting: "Good Afternoon!", emoji: "🌤️" };
    } else if (hour >= 17 && hour < 21) {
      return { greeting: "Good Evening!", emoji: "🌙" };
    } else {
      return { greeting: "Good Night!", emoji: "🌚" };
    }
};