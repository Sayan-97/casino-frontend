import Head from "@/components/shared/head";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CS from "@/public/svgs/cs.svg";
import { Clock } from "lucide-react";

export default function CS2() {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Head image={CS} title="Counter Strike 2" />
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-none p-3 rounded-lg bg-gradient-to-r from-[#245448] to-[#45326F]"
              >
                <AccordionTrigger className="py-0">
                  <div className="flex flex-col items-start">
                    <h6 className="text-xs">Short Football</h6>
                    <h3 className="font-semibold">ACL Indoor 5x5</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="divide-y divide-border">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-3 py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-lg font-bold">
                          <h1>Hamburg</h1>
                          <h1>2 : 1</h1>
                          <h1>Palermo</h1>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4" />
                          56 mins
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center justify-between bg-background p-2 rounded">
                          <p>1</p>
                          <p>1.23</p>
                        </div>
                        <div className="flex items-center justify-between bg-background p-2 rounded">
                          <p>1</p>
                          <p>1.23</p>
                        </div>
                        <div className="flex items-center justify-between bg-background p-2 rounded">
                          <p>1</p>
                          <p>1.23</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
