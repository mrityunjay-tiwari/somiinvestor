import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card } from '@/components/ui/card'
import { MotionSection } from '../general/motion-exports'

export default function ContactSection() {
    return (
        <MotionSection initial={{y:40, opacity:0}} whileInView={{y: 0,opacity: 1}} transition={{ duration: 0.5, ease: "easeOut" }} className="pt-5 shadow-xl rounded-2xl">
            <div className="mx-auto max-w-4xl px-8 lg:px-0">
                
                

                <Card className="mx-auto max-w-2xl shadow-md sm:p-8">
                    <div>
                        <h2 className="text-xl font-semibold">{`Contact Us`}</h2>
                    </div>

                    <form
                        action=""
                        className="**:[&>label]:block space-y-4 *:space-y-3">
                        <div>
                            <Label htmlFor="name">Full name</Label>
                            <Input
                                type="text"
                                id="name"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email Id</Label>
                            <Input
                                type="email"
                                id="email"
                                required
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="email">Contact No.</Label>
                            <Input
                                type="email"
                                id="email"
                                required
                            />
                        </div>

                    

                        <div>
                            <Label htmlFor="msg">Message</Label>
                            <Textarea
                                id="msg"
                                rows={3}
                            />
                        </div>

                        <Button>Submit</Button>
                    </form>
                </Card>
            </div>
        </MotionSection>
    )
}