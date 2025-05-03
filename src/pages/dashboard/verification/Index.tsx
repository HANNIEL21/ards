import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <main className="h-screen w-full flex py-5 gap-8">
      <section className="w-full h-full bg-muted rounded-2xl"></section>
      <section className="w-3/4 flex flex-col gap-5">
        <Tabs defaultValue="certificate" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="certificate">Certificate</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="statement">Statement of result</TabsTrigger>
          </TabsList>
          <TabsContent value="certificate">
            <div className="flex flex-col gap-6 py-8">
              <div className="flex gap-2">
                <Input placeholder="" />
                <Button>Search</Button>
              </div>
              <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                <div className="p-10 rounded-xl bg-muted/50" />
                <div className="p-10 rounded-xl bg-muted/50" />
                <div className="p-10 rounded-xl bg-muted/50" />
                <div className="p-10 rounded-xl bg-muted/50" />
              </div>
              <div>
                <p className="font-bold">Status</p>
                <Badge className="p-2 px-5 text-lg font-bold">
                  Proccessing
                </Badge>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="transcript">Transcript.</TabsContent>
          <TabsContent value="statement">Statement of result.</TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default Index;
