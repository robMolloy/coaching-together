import { Typography } from "@/components";
import { DaisyHero } from "@/components/DaisyHero";

const Parent = () => {
  return (
    <main className={`min-h-screen`}>
      <DaisyHero backgroundImageUrl="/img/redwood.png" heading="Coaching Together">
        Reach your potential
      </DaisyHero>
      <Typography fullPage>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg')",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <div>
            <h2 className="mt-0">Unlocking powerful insights</h2>
            <p>
              Do you need help to achieve your potential? Do you have challenges you’d like to
              overcome?
            </p>
            <p>
              Working together in a safe and trusting environment, my aim is to enable you to build
              a new awareness of yourself to give you the best possible chance of achieving your
              potential. I will help you to understand your patterns of behaviour and thinking, to
              see things from a new perspective, to enable you to step out of your comfort zone,
              move forward and create change.
            </p>
            <p>Contact me here to take your first step to creating change</p>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="mt-0">My style of coaching</h2>
            <p>
              I tailor my approach to you by taking into account your specific circumstances. My
              style is non-directive as this is most helpful in bringing about sustained change. At
              the core of my coaching is my belief that you have the resources you need; I will help
              you to find them. Where appropriate, I’ll suggest tools to help you to overcome your
              challenges. This approach will benefit you, your team and the business as a whole.
            </p>
            <p>
              Click here to talk to me about taking the first step out of your comfort zone and
              getting serious about change
            </p>
            <p>Contact me here to talk about my style of coaching</p>
          </div>
          <div
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg')",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex h-full items-center">
            <div>
              <h2 className="mt-0">What I can help you with?</h2>
              <div>
                I’m passionate about helping people to overcome challenges and achieve their
                potential. Nothing is too trivial or too difficult to have a conversation about.
                Questions and challenges I can help you with include:
              </div>
              <div>Contact to me here to talk about your challenges.</div>
            </div>
          </div>
          <div className="rounded-box bg-neutral p-4 py-0 text-neutral-content">
            <ul className="list-disc">
              <li>leading your team</li>
              <li>managing specific issues within your team</li>
              <li>developing your team to be more effective</li>
              <li>managing home/remote workers</li>
              <li>holding difficult conversations/managing conflict</li>
              <li>managing your toxic boss</li>
              <li>building trust</li>
              <li>developing confidence</li>
              <li>becoming more assertive</li>
              <li>building resilience</li>
              <li>overcoming 'imposter syndrome'</li>
              <li>explore feedback in a safe environment</li>
              <li>
                developing specific skills such as time management, decision making, interview
                skills, presentation skills
              </li>
              <li>identifying Best Self and Shadow Behaviours (see PRINT® section)</li>
              <li>changing/developing your career</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/4168034/pexels-photo-4168034.jpeg')",
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <div>
            <h2 className="mt-0">My Experience</h2>
            <p>
              With over 2 decades of people, organisational and management development experience, I
              use a wide range of tools and techniques to support you in your behaviour change and
              development. I’ve coached people in various types and size of organisation, in the
              public and private sector, and at all levels up to Managing Director. I’ve recruited
              and managed two training teams, and reporting at Director level, been part of a senior
              management team of a FTSE 100 company. I brings this experience to my coaching and
              tailor my approach to your unique needs. I’ve witnessed the powerful difference that
              my coaching has made to individuals and their businesses (see testimonials). I strive
              to be the best coach I can be through personal development, self-reflection and
              supervision.
            </p>
          </div>
        </div>
        <div className="text-center">Click here to talk to me about achieving your potential</div>
        <br />
        <br />
        <div className="rounded-box bg-neutral p-4 pb-2">
          <h2 className="mt-0 text-center text-neutral-content">
            Qualifications and professional membership
          </h2>

          <ul className="list-disc rounded-box text-neutral-content">
            <li>Post-graduate level certificate in Performance Development Coaching</li>
            <li>MSc in Management</li>
            <li>PRINT® and DiSC accredited</li>
            <li>Trained NLP practitioner, I use NLP techniques in coaching where appropriate</li>
            <li>
              Member of the Association for Coaching, Coaching York and Associate Member of the
              CIPD.
            </li>
          </ul>
        </div>
      </Typography>
    </main>
  );
};

export default Parent;
