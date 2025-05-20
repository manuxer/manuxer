
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-medium mb-6">Interested in working together?</h3>
      <Button asChild size="lg">
        <Link to="mailto:contact@janedoe.com">
          Let's Talk
        </Link>
      </Button>
    </div>
  );
};

export default ContactButton;
