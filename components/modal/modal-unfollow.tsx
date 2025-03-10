import { useUnfollowKOL } from "@/hooks/mutation/api/useUnfollowKOL";
import { KOLResponse } from "@/types/api/kol.types";
import { Button } from "@heroui/button";
import { useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import Loading from "../loader/loading";

export default function ModalUnfollow({
  kolId,
  kol,
}: {
  kolId: number;
  kol: KOLResponse;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { mutation } = useUnfollowKOL();

  const handleUnfollow = () => {
    mutation.mutate({
      kolId: kolId,
    }, {
      onSuccess: () => {
        onClose();
        window.location.reload();
      },
    });
  }

  return (
    <>
      {mutation.isPending && <Loading />}
      <Button color="danger" variant="flat" onPress={onOpen}>
        Unfollow
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Unfollow {kol.name}</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to unfollow {kol.name}? You will no longer
                  receive updates from this KOL.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" variant="solid" onPress={handleUnfollow} disabled={mutation.isPending}>
                  Unfollow
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
