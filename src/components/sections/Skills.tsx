import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaUnity } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiCplusplus, SiFigma } from 'react-icons/si';
import { IoGameControllerOutline } from 'react-icons/io5';
import { MdOutlineDesignServices } from 'react-icons/md';

export function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: 'React.js', icon: FaReact },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'HTML5', icon: FaHtml5 },
        { name: 'CSS3', icon: FaCss3Alt },
      ]
    },
    {
      title: "Game Development",
      skills: [
        { name: 'Unity Engine', icon: FaUnity },
        { name: 'C# Programming', icon: SiCplusplus },
        { name: 'Game Mechanics', icon: IoGameControllerOutline },
      ]
    },
    {
       title: "Tools & Design",
       skills: [
        { name: 'Git/GitHub', icon: FaGithub },
        { name: 'UI/UX Design', icon: SiFigma },
        { name: '2D Pixel Art', icon: MdOutlineDesignServices },
       ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">My Arsenal</h2>
          <p className="text-zinc-400 text-lg">Tools and technologies I use to build things.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
             <div key={idx} className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
                <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                   {category.skills.map((skill, sIdx) => {
                      const Icon = skill.icon;
                      return (
                        <div key={sIdx} className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-600 transition-colors cursor-default">
                           <Icon className="w-4 h-4 text-zinc-400" />
                           <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                        </div>
                      )
                   })}
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}