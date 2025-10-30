export default function Sidebar() {
  const featuredTech = [ { icon: '⚛️', name: 'React', description: 'Component-based UI' }, { icon: '📦', name: 'Node.js', description: 'Backend Runtime' } ];
  const patchNotesData = [ { version: "v1.2", note: "Deployed portfolio." }, { version: "v1.1", note: "Completed Node.js course." } ];

  return (
    // --- THE FIX: We added `hidden lg:block` here ---
    // This tells the sidebar itself to be hidden by default
    // and only show up on 'large' (lg) screens.
    <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 h-auto w-72 bg-black/50 backdrop-blur-md border border-gray-800 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.6)] z-20">
      <div>
        <div className="border-b border-gray-700/50 py-3 text-center">
          <h3 className="text-gray-300 font-valorant text-sm tracking-widest">FEATURED</h3>
          <p className="text-xs text-gray-500">COLLECTION</p>
        </div>
        <div className="p-4 space-y-3">
          {featuredTech.map((tech) => (
            <div key={tech.name} className="flex items-center justify-between bg-gray-900/40 rounded-lg px-3 py-2 border border-gray-800 hover:bg-gray-800/40 transition-all">
              <div className="flex items-center space-x-3">
                <div className="text-valorant-red text-lg">{tech.icon}</div>
                <div>
                  <h4 className="text-white font-semibold text-sm leading-tight">{tech.name}</h4>
                  <p className="text-gray-400 text-xs leading-tight">{tech.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="border-t border-b border-gray-700/50 py-3 text-center">
          <h3 className="text-gray-300 font-valorant text-sm tracking-widest">PATCH NOTES</h3>
        </div>
        <div className="px-4 py-3 space-y-2">
          {patchNotesData.map((item) => (
            <div key={item.version} className="flex items-start text-xs text-gray-300">
              <span className="font-bold w-12">{item.version}</span>
              <span className="text-gray-400 flex-1">{item.note}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}