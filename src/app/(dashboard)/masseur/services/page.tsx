'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Clock, DollarSign, Edit, Plus, Star, Trash2 } from 'lucide-react';
import { useState } from 'react';

const mockServices = [
  { id: 1, name: 'Swedish Massage', description: 'Relaxing full-body massage', duration: 60, price: 120, category: 'Relaxation', active: true },
  { id: 2, name: 'Deep Tissue Massage', description: 'Targets deep muscle knots', duration: 90, price: 150, category: 'Therapeutic', active: true },
  { id: 3, name: 'Hot Stone Massage', description: 'Uses heated stones for relaxation', duration: 75, price: 180, category: 'Luxury', active: true },
  { id: 4, name: 'Sports Massage', description: 'Focuses on muscle systems', duration: 60, price: 140, category: 'Therapeutic', active: false },
];

export default function ServicesPage() {
  const [services, setServices] = useState(mockServices);
  const [isAddingService, setIsAddingService] = useState(false);
  const [newService, setNewService] = useState({ name: '', description: '', duration: 60, price: 0, category: '' });

  const handleAddService = () => {
    if (newService.name && newService.description) {
      const service = {
        id: Date.now(),
        ...newService,
        active: true
      };
      setServices([...services, service]);
      setNewService({ name: '', description: '', duration: 60, price: 0, category: '' });
      setIsAddingService(false);
    }
  };

  const toggleService = (id: number) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, active: !service.active } : service
    ));
  };

  const deleteService = (id: number) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="space-y-6">
      <FadeIn delay={300}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Services</h1>
            <p className="text-muted-foreground">
              Manage your massage services and pricing
            </p>
          </div>
          <Button onClick={() => setIsAddingService(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Service
          </Button>
        </div>
      </FadeIn>

      {/* Add Service Form */}
      {isAddingService && (
        <SlideUp delay={400}>
          <Card>
            <CardHeader>
              <CardTitle>Add New Service</CardTitle>
              <CardDescription>
                Create a new massage service for your clients
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Service Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Swedish Massage"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={newService.category} onValueChange={(value) => setNewService({ ...newService, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Relaxation">Relaxation</SelectItem>
                      <SelectItem value="Therapeutic">Therapeutic</SelectItem>
                      <SelectItem value="Luxury">Luxury</SelectItem>
                      <SelectItem value="Sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your service..."
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={newService.duration}
                    onChange={(e) => setNewService({ ...newService, duration: parseInt(e.target.value) || 60 })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={newService.price}
                    onChange={(e) => setNewService({ ...newService, price: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleAddService}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Service
                </Button>
                <Button variant="outline" onClick={() => setIsAddingService(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </SlideUp>
      )}

      {/* Services Grid */}
      <SlideUp delay={500}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <Badge variant={service.active ? "default" : "secondary"}>
                    {service.active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    {service.duration} min
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
                    ${service.price}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{service.category}</Badge>
                  <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-8 w-8 p-0"
                      onClick={() => toggleService(service.id)}
                    >
                      <Star className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      className="h-8 w-8 p-0"
                      onClick={() => deleteService(service.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SlideUp>

      {/* Services Stats */}
      <SlideUp delay={600}>
        <Card>
          <CardHeader>
            <CardTitle>Service Statistics</CardTitle>
            <CardDescription>
              Overview of your service offerings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{services.length}</div>
                <div className="text-sm text-muted-foreground">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{services.filter(s => s.active).length}</div>
                <div className="text-sm text-muted-foreground">Active Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">${Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length)}</div>
                <div className="text-sm text-muted-foreground">Average Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{Math.round(services.reduce((sum, s) => sum + s.duration, 0) / services.length)}</div>
                <div className="text-sm text-muted-foreground">Avg Duration (min)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SlideUp>
    </div>
  );
}