'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideUp } from '@/components/animations/slide-up';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Edit, Eye, Plus, Star, Trash2, Upload } from 'lucide-react';
import { useState } from 'react';

const mockPortfolioImages = [
  { id: 1, url: '/api/placeholder/300/200', title: 'Swedish Massage Setup', description: 'Professional massage table setup', category: 'Setup', featured: true },
  { id: 2, url: '/api/placeholder/300/200', title: 'Deep Tissue Session', description: 'Deep tissue massage in progress', category: 'Technique', featured: false },
  { id: 3, url: '/api/placeholder/300/200', title: 'Hot Stone Therapy', description: 'Relaxing hot stone massage', category: 'Equipment', featured: true },
  { id: 4, url: '/api/placeholder/300/200', title: 'Aromatherapy Setup', description: 'Essential oils and diffuser setup', category: 'Equipment', featured: false },
];

export default function PortfolioPage() {
  const [images, setImages] = useState(mockPortfolioImages);
  const [isAddingImage, setIsAddingImage] = useState(false);
  const [newImage, setNewImage] = useState({ title: '', description: '', category: '' });

  const handleAddImage = () => {
    if (newImage.title && newImage.description) {
      const image = {
        id: Date.now(),
        url: '/api/placeholder/300/200',
        ...newImage,
        featured: false
      };
      setImages([...images, image]);
      setNewImage({ title: '', description: '', category: '' });
      setIsAddingImage(false);
    }
  };

  const toggleFeatured = (id: number) => {
    setImages(images.map(img => 
      img.id === id ? { ...img, featured: !img.featured } : img
    ));
  };

  const deleteImage = (id: number) => {
    setImages(images.filter(img => img.id !== id));
  };

  return (
    <div className="space-y-6">
      <FadeIn delay={300}>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
            <p className="text-muted-foreground">
              Showcase your work and attract more clients
            </p>
          </div>
          <Button onClick={() => setIsAddingImage(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Image
          </Button>
        </div>
      </FadeIn>

      {/* Add Image Form */}
      {isAddingImage && (
        <SlideUp delay={400}>
          <Card>
            <CardHeader>
              <CardTitle>Add New Image</CardTitle>
              <CardDescription>
                Upload a new image to your portfolio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Image Title</Label>
                <Input
                  id="title"
                  placeholder="e.g., Swedish Massage Setup"
                  value={newImage.title}
                  onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your image..."
                  value={newImage.description}
                  onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  placeholder="e.g., Setup, Technique, Equipment"
                  value={newImage.category}
                  onChange={(e) => setNewImage({ ...newImage, category: e.target.value })}
                />
              </div>
              <div className="flex space-x-2">
                <Button onClick={handleAddImage}>
                  <Upload className="mr-2 h-4 w-4" />
                  Add Image
                </Button>
                <Button variant="outline" onClick={() => setIsAddingImage(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </SlideUp>
      )}

      {/* Portfolio Grid */}
      <SlideUp delay={500}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card key={image.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative">
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <div className="text-muted-foreground">Image Placeholder</div>
                </div>
                {image.featured && (
                  <Badge className="absolute top-2 left-2" variant="default">
                    <Star className="mr-1 h-3 w-3" />
                    Featured
                  </Badge>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex space-x-1">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive" 
                      className="h-8 w-8 p-0"
                      onClick={() => deleteImage(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{image.category}</Badge>
                    <Button
                      size="sm"
                      variant={image.featured ? "default" : "outline"}
                      onClick={() => toggleFeatured(image.id)}
                    >
                      <Star className="mr-1 h-3 w-3" />
                      {image.featured ? 'Featured' : 'Feature'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SlideUp>

      {/* Portfolio Stats */}
      <SlideUp delay={600}>
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Statistics</CardTitle>
            <CardDescription>
              Track your portfolio performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{images.length}</div>
                <div className="text-sm text-muted-foreground">Total Images</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{images.filter(img => img.featured).length}</div>
                <div className="text-sm text-muted-foreground">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1.2k</div>
                <div className="text-sm text-muted-foreground">Total Views</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </SlideUp>
    </div>
  );
}
