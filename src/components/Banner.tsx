import ThemeSelect from './ThemeSelect';
import polarBearImg from '../assets/1403968.png';

function Banner(): JSX.Element {
  return (
    <section className="banner" id="home">
      <div className="flex items-center gap-4">
        <div>
          Hobby: I'm keen on frontend development, would like meantime study popular technologies. Capability : I have strong learning ability, am
          able to swiftly study and adapt with new technologies. I'm looking forward to having own team member to work with, to share ideas, and
          metoring junior members. Personality: Quite introverted and focus , I would prefer challenging works than talking or negotiate with others,
          in another word, result is the best speaker. I'd also like doing researches with concept in mind and then making abstraction and clean
          codes. Preference: There's a high geek spirit inside me. I'd rather take several days making scripts to do my daily repeated jobs. I really
          prefer extreme quiet workspace. Most of annoying comes from interruptions of any kind when coding in progress, dozens of ideas would be gone
          in a blink. I'm a fan of VSCode by the way, which I think is one of the most powerful tool on earth, plugins just make it more beautiful.
          Experiences: Experienced in Webpack, Nginx and browser cache issue resolving. Familiar with Jenkins, Docker, TeamCity, uDeploy, CI/CD
          process. Familiar with Agile Methodology, using JIRA to manage tasks and progress.
        </div>

        <img src={polarBearImg} width={256} className="m-8"></img>
      </div>
    </section>
  );
}

export default Banner;
