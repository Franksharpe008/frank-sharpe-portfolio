import React from 'react';
import Icon from '../../../components/AppIcon';


const ProjectFilter = ({ activeFilter, onFilterChange, projectCounts }) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3X3', count: projectCounts?.all },
    { id: 'ai-enhanced', label: 'AI Enhanced', icon: 'Brain', count: projectCounts?.aiEnhanced },
    { id: 'webgl', label: 'WebGL/3D', icon: 'Box', count: projectCounts?.webgl },
    { id: 'ecommerce', label: 'E-commerce', icon: 'ShoppingCart', count: projectCounts?.ecommerce },
    { id: 'data-viz', label: 'Data Visualization', icon: 'BarChart3', count: projectCounts?.dataViz },
    { id: 'tailorbytez', label: 'TailorBytez', icon: 'Zap', count: projectCounts?.tailorbytez }
  ];

  return (
    <div className="bg-card rounded-xl p-6 shadow-soft">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-cosmic-primary rounded-lg flex items-center justify-center">
          <Icon name="Filter" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg text-foreground">Filter Projects</h3>
          <p className="text-sm text-muted-foreground">Explore by technology or industry</p>
        </div>
      </div>
      <div className="space-y-2">
        {filters?.map((filter) => (
          <button
            key={filter?.id}
            onClick={() => onFilterChange(filter?.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 group ${
              activeFilter === filter?.id
                ? 'bg-cosmic-primary text-white shadow-cosmic'
                : 'hover:bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center space-x-3">
              <Icon
                name={filter?.icon}
                size={18}
                className={`transition-colors duration-300 ${
                  activeFilter === filter?.id ? 'text-cosmic-accent' : 'group-hover:text-cosmic-primary'
                }`}
              />
              <span className="font-medium">{filter?.label}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${
              activeFilter === filter?.id
                ? 'bg-cosmic-accent text-white' :'bg-muted-foreground/20 text-muted-foreground group-hover:bg-cosmic-primary/20 group-hover:text-cosmic-primary'
            }`}>
              {filter?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Technology Stack Legend */}
      <div className="mt-8 pt-6 border-t border-border">
        <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Technology Stack</h4>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <Icon name="Atom" size={14} className="text-cosmic-accent" />
            <span className="text-muted-foreground">React</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Box" size={14} className="text-cosmic-secondary" />
            <span className="text-muted-foreground">Three.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Brain" size={14} className="text-cosmic-trust" />
            <span className="text-muted-foreground">OpenAI</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Database" size={14} className="text-cosmic-primary" />
            <span className="text-muted-foreground">D3.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;