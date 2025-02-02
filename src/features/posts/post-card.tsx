import { Heart, Bookmark, MessageCircle } from 'lucide-react';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import Card from '../../components/card';

export default function PostCard() {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Avatar fallback="KC" />
          <div className="flex flex-col">
            <span className="text-sm">Kharl Cruz</span>
            <span className="text-xs text-gray-500">Yesterday at 10:40</span>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, velit impedit
          commodi nulla totam doloremque dignissimos alias facilis, ut eius quibusdam ab aliquid
          laboriosam quam itaque! Deserunt sunt magnam quo?
        </p>
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Button
              variant="secondary"
              secondaryColor="danger"
              size="icon"
            >
              <Heart className="text-red-500" />
            </Button>
            <Button
              variant="secondary"
              secondaryColor="accent"
              size="icon"
            >
              <Bookmark className="text-yellow-500" />
            </Button>
          </div>

          <Button
            variant="secondary"
            secondaryColor="secondary"
          >
            <MessageCircle className="text-purple-500" />
            Comments
          </Button>
        </div>
      </div>
    </Card>
  );
}
