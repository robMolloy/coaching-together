/* eslint-disable @next/next/no-img-element */
import { Typography } from "@/components";

const Parent = () => {
  return (
    <main className={`min-h-screen`}>
      <Typography fullPage>
        <h2 className="mt-0">What is coaching?</h2>
        <p>
          Coaching literally means to transport you from one place to another, part of your journey
          moving forward and creating change and is founded on a position of trust. It's simply a
          conversation that, done well, can bring about personal insight and sustained behaviour
          change. It's a bespoke, time effective way to develop.
        </p>
        <p>I'd love to be part of your journey, contact me here to talk about how I can help</p>
        <br />
        <h2 className="mt-0">How to select a coach</h2>
        <p>
          For coaching to be successful it's important to have the right chemistry between you and
          your coach. During our first no obligation conversation about your situation and how we
          might work together, if we don't think the chemistry is there, I can suggest someone from
          my network who maybe more suitable to work with you.
        </p>
        <p>Contact me here to arrange a chemistry session</p>
        <br />
        <div className="flex justify-center">
          <img src="/img/print_logo_small2.png" alt="" />
        </div>
        <p className="mt-0">
          I am a licensed practitioner/coach in The Why of you Powered by PRINT®, a breakthrough
          model of human motivation and behavior that was developed by The Paul Hertz Group.
        </p>
        <p>
          The approach is used to enhance understanding of the way people react and how they relate
          by explaining the “why” behind their behavior - why people act as they do, why they make
          certain choices, why they are attracted to certain things and why they function better in
          certain situations than others.
        </p>
        <p>
          Everyone has core motivations that drive their actions and behaviors. PRINT® reveals what
          these motivators are and in doing so, clarifies what is needed to bring out people's best.
          It helps unleash the potential that lies within all people. PRINT® is a valuable guide to
          create success and reveal what can be done to face and overcome one's challenges. PRINT®
          builds insight into others, as well as one's self.
        </p>
        <p>
          There are 72 PRINTS®, each with their own core motivations and behaviors. No PRINT® is
          better than any other and each possesses its own natural gifts and contributions (Best
          Self) and its own potential barriers and obstacles (Shadow).
        </p>
        <p>
          Every PRINT® exhibits Best Self and Shadow behavior. The goal of the Why of you program
          is to teach people how to diminish the frequency of Shadow behavior and increase the
          presence of Best Self. Shadow is people's automatic response to the stressors in their
          lives. It may be more automatic for some people to be in Best Self or Shadow than others.
          A person's professional and personal environment plays a role, as well as their level of
          self-awareness. Studies have shown there is a positive correlation between Best Self and
          performance.
        </p>
        <p>
          I am certified to use and analyze the Paul Hertz Group's PRINT® Survey, a 10-15 minute,
          statistically validated, highly accurate, and dynamic online instrument as part of my
          coaching process (dynamic meaning that different questions come up based on how previous
          ones were answered, so people take different surveys). The instrument helps me uncover an
          individual's core motivators and the behaviors that reflect both their Best Self and their
          potential Shadow. This information helps me work in partnership with individuals to
          efficiently accomplish goals and generate strategies to yield desired results.
        </p>
        <p>
          Knowing “why” accelerates successful growth and transformation. PRINT® provides this
          vital information.
        </p>
        <p>You may also wish to find out more about PRINT by watching this short YouTube video:</p>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            title="print_yt_video"
            src="https://www.youtube.com/embed/FGgDw5GnAic"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </div>
        <p>Contact me here to discuss PRINT® profiling</p>
        <div className="flex justify-center">
          <img src="/img/everything_disc.jpg" alt="" />
        </div>
        <p>
          Everything DiSC is a simple profiling tool based on 4 DiSC styles and useful for
          understanding your motivators and stressors. The profile also includes strategies for
          working with people with different styles, and tips to increase your workplace
          effectiveness. A range of profiles are available, each one focuses on a specific context
          to help you improve in that area:
        </p>
        <ul className="list-disc">
          <li>Workplace Profile</li>
          <li>Productive Conflict Profile</li>
          <li>Management Profile</li>
          <li>Work of Leaders Profile</li>
          <li>Group Culture Report</li>
          <li>Contact me here to talk about DiSC</li>
        </ul>
        <p>Contact me here to talk about DiSC</p>
      </Typography>
    </main>
  );
};

export default Parent;
