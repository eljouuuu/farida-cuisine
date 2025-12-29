import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, Users, User, MessageSquare, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Booking = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: "",
    guests: "",
    time: "",
    notes: "",
  });

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ];

  const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.guests || !formData.time || !date) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Reservation Request Sent!",
      description: `Thank you ${formData.fullName}. We'll confirm your booking for ${formData.guests} guests on ${format(date, "PPP")} at ${formData.time}.`,
    });

    // Reset form
    setFormData({ fullName: "", guests: "", time: "", notes: "" });
    setDate(undefined);
  };

  return (
    <>
      <Helmet>
        <title>Book a Table | Farida Lebanon Restaurant</title>
        <meta name="description" content="Reserve your table at Farida Lebanon. Experience authentic Lebanese cuisine in an elegant setting." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary-foreground/20" />
          <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-primary-foreground/20" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-primary-foreground/20" />
          <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary-foreground/20" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="absolute left-4 top-0 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="font-display text-4xl md:text-5xl text-primary-foreground italic mb-4">
              Book Your Table
            </h1>
            <p className="text-primary-foreground/80 max-w-md mx-auto">
              Reserve your spot for an unforgettable Lebanese dining experience
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2 text-foreground">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="h-12 bg-card border-border focus:border-primary"
                />
              </div>

              {/* Date Picker */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date *
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal bg-card border-border",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP") : "Select a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  Number of Guests *
                </Label>
                <Select
                  value={formData.guests}
                  onValueChange={(value) => setFormData({ ...formData, guests: value })}
                >
                  <SelectTrigger className="h-12 bg-card border-border">
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {guestOptions.map((num) => (
                      <SelectItem key={num} value={num}>
                        {num} {num === "1" ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  Time *
                </Label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => setFormData({ ...formData, time: value })}
                >
                  <SelectTrigger className="h-12 bg-card border-border">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Additional Notes
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Any special requests, dietary requirements, or occasions..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="min-h-[120px] bg-card border-border focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full"
              >
                Reserve Now
              </Button>

              <p className="text-center text-muted-foreground text-sm">
                We'll confirm your reservation within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
