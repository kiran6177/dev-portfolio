import CommandStart from "@/components/Terminal/CommandStart";
import Terminal from "@/components/Terminal/Terminal";

export default function Home() {
  return (
    <div>
      <section className="relative">
        <p className="display-d1 text-secondary-900 opacity-5 absolute -top-10 -left-12">01</p>
        <p className="font-terminal text-secondary-900 mb-6">01 IDENTITY</p>
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="display-h2">Engineering </h2>
              <h2 className="display-h2 text-gradient w-fit">Scalable</h2>
              <h2 className="display-h2">Systems with</h2>
              <h2 className="display-h2">Absolute Precision.</h2>
            </div>
            <p className="text-secondary large-p">
              Full-stack engineer specializing in designing scalable systems with a focus on
              reliability, observability, and performance. Experienced in building and deploying
              production-ready applications, optimizing backend services, and ensuring systems
              operate efficiently under real-world scale.
            </p>
          </div>
          <div>
            <Terminal>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3">
                  <CommandStart /> <p className="font-terminal">whoami</p>
                </div>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">name:</span> 'Kiran'
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">role:</span> 'Full Stack Engineer'
                </p>
                <p className="font-terminal text-secondary-900">
                  <span className="text-primary font-terminal">experience:</span> 2.5{" "}
                  <span className="text-secondary/60 font-terminal">// years</span>
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">location:</span> 'Kochi, Kerala,
                  India'
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">skills:</span>
                  <span className="text-primary-900"> [</span>'JavaScript', 'Node' , 'React',
                  'MongoDB',...+10<span className="text-primary-900">]</span>
                </p>
                <p className="font-terminal text-tertiary-900">
                  <span className="text-primary font-terminal">status:</span> 'Available_for_build'
                </p>
              </div>
            </Terminal>
          </div>
        </div>
      </section>
    </div>
  );
}
