import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function HamburguerMenu(){
  
   return(
    <Sheet>
      <SheetTrigger >
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle><h1 className="font-bold text-black text-xl">your chats</h1></SheetTitle>
        </SheetHeader>
         <div className="flex flex-col gap-4 mt-4">
            <h1>oiii</h1>
         </div>
      </SheetContent>
    </Sheet>
   )
}