import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDemo, onViewCase }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-layered transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with metrics */}
        <div className={`absolute inset-0 bg-gradient-to-t from-cosmic-primary/90 via-cosmic-primary/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="grid grid-cols-3 gap-2 text-white text-sm">
              {project?.metrics?.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-bold text-cosmic-accent">{metric?.value}</div>
                  <div className="text-xs opacity-90">{metric?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cosmic-accent text-white text-xs font-semibold rounded-full">
            {project?.type}
          </span>
        </div>

        {/* Live Demo Badge */}
        {project?.hasLiveDemo && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 px-2 py-1 bg-success text-white text-xs font-medium rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-cosmic-primary transition-colors duration-300">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-cosmic-accent">
            {project?.technologies?.slice(0, 3)?.map((tech, index) => (
              <Icon key={index} name={tech?.icon} size={16} />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md font-mono"
            >
              {tech?.name}
            </span>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="space-y-2 mb-6">
          {project?.highlights?.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Icon name="CheckCircle" size={14} className="text-success flex-shrink-0" />
              <span className="text-muted-foreground">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project?.hasLiveDemo && (
            <Button
              variant="default"
              size="sm"
              className="flex-1 cosmic-button"
              iconName="ExternalLink"
              iconPosition="right"
              iconSize={14}
              onClick={() => onViewDemo(project)}
            >
              Live Demo
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            iconName="FileText"
            iconPosition="right"
            iconSize={14}
            onClick={() => onViewCase(project)}
          >
            Case Study
          </Button>
        </div>
      </div>
      {/* Cosmic Glow Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r from-cosmic-accent via-cosmic-secondary to-cosmic-primary rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm -z-10`}></div>
    </div>
  );
};

export default ProjectCard;